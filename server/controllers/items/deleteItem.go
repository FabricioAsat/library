package items

import (
	"context"
	"sell-point/database"
	"sell-point/models"
	"sell-point/services"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// DELETE /items/:id?type=(itemType)
func DeleteItem(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	id := c.Params("id")
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	itemType := c.Query("type")

	switch itemType {
	case string(models.BookType):
		return services.DeleteBookService(c, ctx, db, objID)
	case string(models.MovieType):
		return services.DeleteMovieService(c, ctx, db, objID)
	case string(models.MusicType):
		return services.DeleteMusicService(c, ctx, db, objID)
	case string(models.VideogameType):
		return services.DeleteVideogameService(c, ctx, db, objID)
	case string(models.BoardGameType):
		return services.DeleteBoardGameService(c, ctx, db, objID)
	default:
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid item type query",
		})
	}
}
