package items

import (
	"context"
	"sell-point/database"
	"sell-point/services"
	"time"

	"github.com/gofiber/fiber/v2"
)

func GetAllItems(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	books, err := services.GetAllBooksService(c, ctx, db)
	if err != nil {
		return err
	}

	movies, err := services.GetAllMoviesService(c, ctx, db)
	if err != nil {
		return err
	}

	musics, err := services.GetAllMusicsService(c, ctx, db)
	if err != nil {
		return err
	}

	boardGames, err := services.GetAllBoardGamesService(c, ctx, db)
	if err != nil {
		return err
	}

	videogames, err := services.GetAllVideogamesService(c, ctx, db)
	if err != nil {
		return err
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "All items found",
		"data":    fiber.Map{"books": books, "movies": movies, "musics": musics, "boardGames": boardGames, "videogames": videogames},
	})

}
