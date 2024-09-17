package services

import (
	"context"
	"sell-point/database"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"
	"time"

	"github.com/gofiber/fiber/v2"
)

func PostBookService(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	booksCollection := mongocollect.GetCollection(db, "items/books")

	var book models.BookModel
	if err := c.BodyParser(&book); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	insertedBook, err := booksCollection.InsertOne(ctx, book)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create book",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Book created successfully",
		"data":    insertedBook,
	})
}

func PostVideogameService(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	booksCollection := mongocollect.GetCollection(db, "items/videogames")
	var videogame models.VideogameModel
	if err := c.BodyParser(&videogame); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	insertedVideogame, err := booksCollection.InsertOne(ctx, videogame)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create videogame",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Videogame created successfully",
		"data":    insertedVideogame,
	})
}

func PostMusicService(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	musicsCollection := mongocollect.GetCollection(db, "items/music")
	var music models.MusicModel
	if err := c.BodyParser(&music); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	insertedMusic, err := musicsCollection.InsertOne(ctx, music)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create music",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Music created successfully",
		"data":    insertedMusic,
	})
}

func PostMovieService(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	moviesCollection := mongocollect.GetCollection(db, "items/movies")
	var movie models.MusicModel
	if err := c.BodyParser(&movie); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	insertedMovie, err := moviesCollection.InsertOne(ctx, movie)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create movie",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Movie created successfully",
		"data":    insertedMovie,
	})
}

func PostBoardGameService(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	boardgamesCollection := mongocollect.GetCollection(db, "items/boardgames")
	var boardgame models.MusicModel
	if err := c.BodyParser(&boardgame); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}

	insertedBoardgame, err := boardgamesCollection.InsertOne(ctx, boardgame)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to create boardgame",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Boardgame created successfully",
		"data":    insertedBoardgame,
	})
}
