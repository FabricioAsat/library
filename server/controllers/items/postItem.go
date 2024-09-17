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
		services.PostBookService(c)
	case models.VideogameType:
		services.PostVideogameService(c)
	case models.MusicType:
		services.PostMusicService(c)
	case models.MovieType:
		services.PostMovieService(c)
	case models.BoardGameType:
		services.PostBoardGameService(c)
	default:
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid item type",
		})
	}
	return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
		"error": "Item type not found",
	})
}
