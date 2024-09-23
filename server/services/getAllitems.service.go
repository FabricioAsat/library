package services

import (
	"context"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetAllBooksService(c *fiber.Ctx, ctx context.Context, db *mongo.Client) ([]models.BookModel, error) {
	books := []models.BookModel{}
	booksCollection := mongocollect.GetCollection(db, "books")
	cursor, err := booksCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var book models.BookModel
		if err := cursor.Decode(&book); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		books = append(books, book)
	}
	return books, nil
}

func GetAllMoviesService(c *fiber.Ctx, ctx context.Context, db *mongo.Client) ([]models.MovieModel, error) {
	movies := []models.MovieModel{}
	moviesCollection := mongocollect.GetCollection(db, "movies")
	cursor, err := moviesCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var movie models.MovieModel
		if err := cursor.Decode(&movie); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		movies = append(movies, movie)
	}
	return movies, nil
}

func GetAllMusicsService(c *fiber.Ctx, ctx context.Context, db *mongo.Client) ([]models.MusicModel, error) {
	musics := []models.MusicModel{}
	musicsCollection := mongocollect.GetCollection(db, "musics")
	cursor, err := musicsCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var music models.MusicModel
		if err := cursor.Decode(&music); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		musics = append(musics, music)
	}
	return musics, nil
}

func GetAllBoardGamesService(c *fiber.Ctx, ctx context.Context, db *mongo.Client) ([]models.BoardGameModel, error) {
	boardGames := []models.BoardGameModel{}
	boardGamesCollection := mongocollect.GetCollection(db, "boardgames")
	cursor, err := boardGamesCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var boardGame models.BoardGameModel
		if err := cursor.Decode(&boardGame); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		boardGames = append(boardGames, boardGame)
	}
	return boardGames, nil
}

func GetAllVideogamesService(c *fiber.Ctx, ctx context.Context, db *mongo.Client) ([]models.VideogameModel, error) {
	videogames := []models.VideogameModel{}
	videogamesCollection := mongocollect.GetCollection(db, "videogames")
	cursor, err := videogamesCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var videogame models.VideogameModel
		if err := cursor.Decode(&videogame); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		videogames = append(videogames, videogame)
	}
	return videogames, nil
}
