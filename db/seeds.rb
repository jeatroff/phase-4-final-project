puts "Resetting data..."
Movie.destroy_all
User.destroy_all
UserMovie.destroy_all

puts "Seeding movies..."
Movie.create!([
  {
    name: "Titanic",
    image: "https://4.bp.blogspot.com/-6bg34uRYJ3M/V8Sm3tBwv_I/AAAAAAAAACU/LrYomDfi-swIpPnFwP4pxGBb-S7pxYlKQCLcB/s1600/titanic.jpg"
  },
  {
    name: "The Lion King",
    image: "https://i.pinimg.com/originals/a1/58/de/a158def8ab10fbd68b14efa3fce36e26.jpg"
  },
  {
    name: "When Harry Met Sally",
    image: "https://media.movieassets.com/static/images/items/movies/posters/0aadad457b4320ec1dcc3713be987703.jpg"
  },
  {
    name: "Mad Max: Fury Road",
    image: "https://buzz.tt/media/posters/857/posters_2_1500.jpg"
  },
  {
    name: "Spirited Away",
    image: "https://picfiles.alphacoders.com/364/364449.jpg"
  },
])

puts "Seeding users..."
User.create!([
    {
        name: "Sara",
        age: 19,
        description: "Hi! Message me to learn more!"
    },
    {
        name: "Ben",
        age: 20,
        description: "not really sure what to put here :/"
    },
    {
        name: "Pat",
        age: 21,
        description: "hey y'all"
    },
    {
        name: "Kris",
        age: 20,
        description: "Hi, profile still in progress."
    },
])

puts "Adding movies to users..."
User.all.each do |user|
  rand(1..5).times do
    # get a random movie
    movie = Movie.find(Movie.pluck(:id).sample)

    UserMovie.create!(user_id: user.id, movie_id: movie.id)
  end
end

puts "Done seeding!"