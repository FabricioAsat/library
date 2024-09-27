package services

import (
	"context"
	"encoding/json"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
)

func PostBookService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, data json.RawMessage) error {
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

func PostVideogameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, data json.RawMessage) error {
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

func PostMusicService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, data json.RawMessage) error {
	musicsCollection := mongocollect.GetCollection(db, "musics")
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

func PostMovieService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, data json.RawMessage) error {
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

func PostBoardGameService(c *fiber.Ctx, ctx context.Context, db *mongo.Client, data json.RawMessage) error {
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
