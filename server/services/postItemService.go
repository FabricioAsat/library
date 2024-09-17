package services

import (
	"context"
	"encoding/json"
	"sell-point/database"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"
	"time"

	"github.com/gofiber/fiber/v2"
)

func PostBookService(c *fiber.Ctx, data json.RawMessage) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	booksCollection := mongocollect.GetCollection(db, "books")

	var book models.BookModel
	if err := json.Unmarshal(data, &book); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			// "error": "Invalid request body",
			"error": err.Error(),
		})
	}

	_, err := booksCollection.InsertOne(ctx, book)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Book created successfully",
		"data":    book,
	})
}

func PostVideogameService(c *fiber.Ctx, data json.RawMessage) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	booksCollection := mongocollect.GetCollection(db, "videogames")
	var videogame models.VideogameModel
	if err := json.Unmarshal(data, &videogame); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	_, err := booksCollection.InsertOne(ctx, videogame)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Videogame created successfully",
		"data":    videogame,
	})
}

func PostMusicService(c *fiber.Ctx, data json.RawMessage) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	musicsCollection := mongocollect.GetCollection(db, "music")
	var music models.MusicModel
	if err := json.Unmarshal(data, &music); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	_, err := musicsCollection.InsertOne(ctx, music)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Music created successfully",
		"data":    music,
	})
}

func PostMovieService(c *fiber.Ctx, data json.RawMessage) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	moviesCollection := mongocollect.GetCollection(db, "movies")
	var movie models.MovieModel
	if err := json.Unmarshal(data, &movie); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	_, err := moviesCollection.InsertOne(ctx, movie)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Movie created successfully",
		"data":    movie,
	})
}

func PostBoardGameService(c *fiber.Ctx, data json.RawMessage) error {
	ctx, cancel := context.WithTimeout(c.Context(), 10*time.Second)
	db, disconnect := database.Connect()
	defer cancel()
	defer disconnect()

	boardgamesCollection := mongocollect.GetCollection(db, "boardgames")
	var boardgame models.BoardGameModel
	if err := json.Unmarshal(data, &boardgame); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	_, err := boardgamesCollection.InsertOne(ctx, boardgame)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Boardgame created successfully",
		"data":    boardgame,
	})
}
