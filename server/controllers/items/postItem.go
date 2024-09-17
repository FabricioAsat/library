package items

import (
	"sell-point/models"
	"sell-point/services"

	"github.com/gofiber/fiber/v2"
)

func PostItem(c *fiber.Ctx) error {
	var itemReq models.ItemReq
	if err := c.BodyParser(&itemReq); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	switch itemReq.Type {
	case models.BookType:
		return services.PostBookService(c, itemReq.Data)
	case models.VideogameType:
		return services.PostVideogameService(c, itemReq.Data)
	case models.MusicType:
		return services.PostMusicService(c, itemReq.Data)
	case models.MovieType:
		return services.PostMovieService(c, itemReq.Data)
	case models.BoardGameType:
		return services.PostBoardGameService(c, itemReq.Data)
	default:
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid item type",
		})
	}
}
