package services

import (
	"context"
	"sell-point/models"
	mongocollect "sell-point/mongoCollect"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetBooksByCollectionID(c *fiber.Ctx, ctx context.Context, db *mongo.Client, collectionID primitive.ObjectID) ([]models.BookModel, error) {
	booksCollection := mongocollect.GetCollection(db, "books")
	cursor, err := booksCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	var books []models.BookModel
	// for each book, check if the collectionID is the same as the one I'm looking for
	for cursor.Next(ctx) {
		var book models.BookModel
		if err := cursor.Decode(&book); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		if book.CollectionID == collectionID {
			books = append(books, book)
		}
	}

	return books, nil
}

func GetMoviesByCollectionID(c *fiber.Ctx, ctx context.Context, db *mongo.Client, collectionID primitive.ObjectID) ([]models.MovieModel, error) {
	moviesCollection := mongocollect.GetCollection(db, "movies")
	cursor, err := moviesCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	var movies []models.MovieModel
	// for each book, check if the collectionID is the same as the one I'm looking for
	for cursor.Next(ctx) {
		var movie models.MovieModel
		if err := cursor.Decode(&movie); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		if movie.CollectionID == collectionID {
			movies = append(movies, movie)
		}
	}

	return movies, nil
}

func GetMusicsByCollectionID(c *fiber.Ctx, ctx context.Context, db *mongo.Client, collectionID primitive.ObjectID) ([]models.MusicModel, error) {
	musicsCollection := mongocollect.GetCollection(db, "musics")
	cursor, err := musicsCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	var musics []models.MusicModel
	// for each book, check if the collectionID is the same as the one I'm looking for
	for cursor.Next(ctx) {
		var music models.MusicModel
		if err := cursor.Decode(&music); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		if music.CollectionID == collectionID {
			musics = append(musics, music)
		}
	}

	return musics, nil
}

func GetBoardGamesByCollectionID(c *fiber.Ctx, ctx context.Context, db *mongo.Client, collectionID primitive.ObjectID) ([]models.BoardGameModel, error) {
	boardGamesCollection := mongocollect.GetCollection(db, "boardgames")
	cursor, err := boardGamesCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	var boardGames []models.BoardGameModel
	// for each book, check if the collectionID is the same as the one I'm looking for
	for cursor.Next(ctx) {
		var boardGame models.BoardGameModel
		if err := cursor.Decode(&boardGame); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		if boardGame.CollectionID == collectionID {
			boardGames = append(boardGames, boardGame)
		}
	}

	return boardGames, nil
}

func GetVideogamesByCollectionID(c *fiber.Ctx, ctx context.Context, db *mongo.Client, collectionID primitive.ObjectID) ([]models.VideogameModel, error) {
	videogamesCollection := mongocollect.GetCollection(db, "videogames")
	cursor, err := videogamesCollection.Find(ctx, bson.M{})
	if err != nil {
		return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	var videogames []models.VideogameModel
	// for each book, check if the collectionID is the same as the one I'm looking for
	for cursor.Next(ctx) {
		var videogame models.VideogameModel
		if err := cursor.Decode(&videogame); err != nil {
			return nil, c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		if videogame.CollectionID == collectionID {
			videogames = append(videogames, videogame)
		}
	}

	return videogames, nil
}
