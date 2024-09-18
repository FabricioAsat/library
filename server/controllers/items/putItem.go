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

func PutItem(c *fiber.Ctx) error {
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

	var itemRequest models.ItemReq
	if err := c.BodyParser(&itemRequest); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	switch itemRequest.Type {
	case models.BookType:
		return services.PutBookService(c, ctx, db, objID, itemRequest.Data)
	case models.MovieType:
		return services.PutMovieService(c, ctx, db, objID, itemRequest.Data)
	case models.MusicType:
		return services.PutMusicService(c, ctx, db, objID, itemRequest.Data)
	case models.VideogameType:
		return services.PutVideogameService(c, ctx, db, objID, itemRequest.Data)
	case models.BoardGameType:
		return services.PutBoardGameService(c, ctx, db, objID, itemRequest.Data)
	default:
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid item type",
		})
	}
}
