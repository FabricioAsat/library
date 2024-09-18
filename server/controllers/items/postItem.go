package items

import (
	"context"
	"sell-point/database"
	"sell-point/models"
	"sell-point/services"
	"time"

	"github.com/gofiber/fiber/v2"
)

func PostItem(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	var itemReq models.ItemReq
	if err := c.BodyParser(&itemReq); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	switch itemReq.Type {
	case models.BookType:
		return services.PostBookService(c, ctx, db, itemReq.Data)
	case models.VideogameType:
		return services.PostVideogameService(c, ctx, db, itemReq.Data)
	case models.MusicType:
		return services.PostMusicService(c, ctx, db, itemReq.Data)
	case models.MovieType:
		return services.PostMovieService(c, ctx, db, itemReq.Data)
	case models.BoardGameType:
		return services.PostBoardGameService(c, ctx, db, itemReq.Data)
	default:
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid item type",
		})
	}
}
