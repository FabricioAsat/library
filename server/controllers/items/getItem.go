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

// GetItem is the controller for the GET /items/:id?type= endpoint
func GetItem(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	typeQuery := c.Query("type")
	id := c.Params("id")
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	if typeQuery != string(models.BookType) && typeQuery != string(models.VideogameType) && typeQuery != string(models.MusicType) && typeQuery != string(models.MovieType) && typeQuery != string(models.BoardGameType) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Type query must be a valid item type",
		})
	}

	switch typeQuery {
	case string(models.BookType):
		return services.GetBookService(c, ctx, db, objID)
	case string(models.VideogameType):
		return services.GetVideogameService(c, ctx, db, objID)
	case string(models.MusicType):
		return services.GetMusicService(c, ctx, db, objID)
	case string(models.MovieType):
		return services.GetMovieService(c, ctx, db, objID)
	case string(models.BoardGameType):
		return services.GetBoardGameService(c, ctx, db, objID)
	default:
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Backend error - getItem.go file - switch statement - default case",
		})
	}

}
