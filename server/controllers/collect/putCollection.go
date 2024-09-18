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
	var collectionNewData models.Collection

	objID, err := primitive.ObjectIDFromHex(collectionId)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	if err := c.BodyParser(&collectionNewData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	collectionNewData.UpdatedAt = time.Now()
	if err := collection.FindOneAndUpdate(ctx, bson.M{"_id": objID}, bson.M{"$set": collectionNewData}); err.Err() != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Err().Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Collection updated successfully",
		"result":  collectionNewData,
	})
}
