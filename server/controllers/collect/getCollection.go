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

func GetCollection(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	collections := mongocollect.GetCollection(db, "collections")

	collectionId := c.Params("id")
	objID, err := primitive.ObjectIDFromHex(collectionId)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	var collectionData models.Collection

	if err := collections.FindOne(ctx, bson.M{"_id": objID}).Decode(&collectionData); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Collection found",
		"data":    collectionData,
	})
}
