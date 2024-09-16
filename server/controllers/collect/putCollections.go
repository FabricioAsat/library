package collections

import (
	"context"
	"sell-point/database"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func PutCollection(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	collection := mongocollect.GetCollection(db, "collections")
	collectionId := c.Params("id")
	var collectionNewData, collectionOldData models.Collection

	objID, err := primitive.ObjectIDFromHex(collectionId)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	// Parse the new collection data from the request body
	if err := c.BodyParser(&collectionNewData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	// Find the old collection data by ID
	if err := collection.FindOne(ctx, bson.M{"_id": objID}).Decode(&collectionOldData); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	// Validate if the name is the same
	if collectionNewData.Name == collectionOldData.Name {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "The collections name cannot be the same (change name)",
		})
	}

	collectionNewData.UpdatedAt = time.Now()
	result, err := collection.UpdateOne(ctx, bson.M{"_id": objID}, bson.M{"$set": collectionNewData})
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Collection updated successfully",
		"result":  result,
	})
}
