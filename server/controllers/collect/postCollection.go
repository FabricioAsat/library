package collections

import (
	"context"
	"sell-point/database"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"
	"time"

	"github.com/gofiber/fiber/v2"
)

func PostCollection(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	defer cancel()

	db, disconnect := database.Connect()
	defer disconnect()
	collection := mongocollect.GetCollection(db, "collections")

	var collectionData, existingCollection models.Collection

	if err := c.BodyParser(&collectionData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	// Check if the collection already exists
	if err := collection.FindOne(ctx, fiber.Map{"name": collectionData.Name}).Decode(&existingCollection); err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"error": "Collection already exists (check name)",
		})
	}

	collectionData.CreatedAt = time.Now()
	collectionData.UpdatedAt = time.Now()

	result, err := collection.InsertOne(ctx, collectionData)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Collection created successfully",
		"data":    result,
	})
}
