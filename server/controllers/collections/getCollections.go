package collections

import (
	"context"
	"sell-point/database"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"

	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)

func GetCollections(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	defer cancel()

	db := database.Connect()
	collection := mongocollect.GetCollection(db, "collections")

	cursor, err := collection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	var collections []models.Collection

	if err := cursor.All(ctx, &collections); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(collections)
}
