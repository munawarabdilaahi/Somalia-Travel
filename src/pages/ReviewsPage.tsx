import { useState } from "react";
import { Star, User, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Review } from "@/types/travel";

const initialReviews: Review[] = [
  {
    id: "1",
    packageId: "1",
    customerName: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely incredible experience! The Maldives package exceeded all expectations. The overwater bungalow was stunning, the staff was amazing, and the snorkeling was world-class. Already planning our next trip with WanderLux!",
    date: "2024-01-15",
    verified: true,
    avatar: "SJ"
  },
  {
    id: "2",
    packageId: "2",
    customerName: "Mike Chen",
    rating: 4,
    comment: "The Swiss Alps adventure was fantastic! Great guides, beautiful scenery, and well-organized itinerary. The only minor issue was the weather on day 3, but that's nature for you. Highly recommend for adventure lovers.",
    date: "2024-01-10",
    verified: true,
    avatar: "MC"
  },
  {
    id: "4",
    packageId: "4",
    customerName: "Amina Yusuf",
    rating: 5,
    comment: "The tropical paradise trip was beyond my expectations! The beaches were breathtaking, and the service was excellent. I would definitely go again.",
    date: "2024-02-15",
    verified: true,
    avatar: "AY"
  },
  {
    id: "5",
    packageId: "5",
    customerName: "John Smith",
    rating: 3,
    comment: "The city tour was informative, but it felt a bit rushed. I wish we had more time at each location. Still, the guide was very knowledgeable.",
    date: "2024-03-02",
    verified: false,
    avatar: "JS"
  },
  {
    id: "6",
    packageId: "6",
    customerName: "Fatima Ali",
    rating: 5,
    comment: "Absolutely loved the mountain adventure! The hiking trails were well-marked, and the team ensured our safety throughout. A truly unforgettable experience.",
    date: "2024-04-12",
    verified: true,
    avatar: "FA"
  },
    {
    id: "7",
    packageId: "7",
    customerName: "David Miller",
    rating: 4,
    comment: "Great overall experience with beautiful resorts and activities. The only downside was the travel delays, but everything else was top-notch.",
    date: "2024-05-20",
    verified: true,
    avatar: "DM"
  },
  {
    id: "8",
    packageId: "8",
    customerName: "Emma Williams",
    rating: 5,
    comment: "The European cultural journey was a dream come true. Prague, Vienna, and Budapest are all magical cities. The historical tours were informative and the local guides were knowledgeable. Worth every penny!",
    date: "2024-01-08",
    verified: true,
    avatar: "EW"
  },
  {
    id: "9",
    packageId: "9",
    customerName: "David Rodriguez",
    rating: 5,
    comment: "Perfect honeymoon destination! The tropical paradise package was everything we hoped for and more. Romantic dinners on the beach, crystal clear waters, and exceptional service. Thank you WanderLux!",
    date: "2024-01-05",
    verified: true,
    avatar: "DR"
  },
  {
    id: "10",
    packageId: "10",
    customerName: "Lisa Thompson",
    rating: 4,
    comment: "Great mountain adventure! The hiking trails were challenging but rewarding. Accommodation in mountain huts was a unique experience. Food was good and equipment provided was top quality.",
    date: "2023-12-28",
    verified: true,
    avatar: "LT"
  },
  {
    id: "11",
    packageId: "11",
    customerName: "James Parker",
    rating: 5,
    comment: "Outstanding cultural tour! Each city offered something unique and special. The art museums were incredible and the local cuisine experiences were unforgettable. Excellent organization throughout.",
    date: "2023-12-20",
    verified: false,
    avatar: "JP"
  },

];

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [filterRating, setFilterRating] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  // Form state for new comment
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState("5");
  const [newComment, setNewComment] = useState("");

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
          />
        ))}
      </div>
    );
  };

  const filteredReviews = reviews
    .filter(review => {
      if (filterRating && review.rating !== parseInt(filterRating)) return false;
      if (searchQuery && !review.comment.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !review.customerName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === "highest") return b.rating - a.rating;
      if (sortBy === "lowest") return a.rating - b.rating;
      return 0;
    });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating =>
    reviews.filter(review => review.rating === rating).length
  );

  // Handler to add new review
  const handleAddReview = () => {
    if (!newName || !newComment) return;

    const newReview: Review = {
      id: (reviews.length + 1).toString(),
      packageId: "custom",
      customerName: newName,
      rating: parseInt(newRating),
      comment: newComment,
      date: new Date().toISOString(),
      verified: false,
      avatar: newName.split(" ").map(n => n[0]).join("").toUpperCase()
    };

    setReviews([newReview, ...reviews]);
    setNewName("");
    setNewComment("");
    setNewRating("5");
  };

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our travelers are saying about their Som Travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-card-travel mb-6">
              <CardHeader>
                <CardTitle>Overall Rating</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on {reviews.length} reviews</p>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating, index) => (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="text-sm font-medium w-3">{rating}</span>
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{
                            width: `${reviews.length > 0 ? (ratingCounts[index] / reviews.length) * 100 : 0}%`
                          }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">{ratingCounts[index]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="shadow-card-travel">
              <CardHeader>
                <CardTitle>Filter Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <Input
                    placeholder="Search reviews..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <Select value={filterRating} onValueChange={setFilterRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="All ratings" />
                    </SelectTrigger>
                    {/* <SelectContent>
                      <SelectItem value="">All ratings</SelectItem>
                      <SelectItem value="5">5 stars</SelectItem>
                      <SelectItem value="4">4 stars</SelectItem>
                      <SelectItem value="3">3 stars</SelectItem>
                      <SelectItem value="2">2 stars</SelectItem>
                      <SelectItem value="1">1 star</SelectItem>
                    </SelectContent> */}
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sort by</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    {/* <SelectContent>
                      <SelectItem value="newest">Newest first</SelectItem>
                      <SelectItem value="oldest">Oldest first</SelectItem>
                      <SelectItem value="highest">Highest rating</SelectItem>
                      <SelectItem value="lowest">Lowest rating</SelectItem>
                    </SelectContent> */}
                  </Select>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    setFilterRating("");
                    setSearchQuery("");
                    setSortBy("newest");
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* New Review Form */}
            <Card className="shadow-card-travel">
              <CardHeader>
                <CardTitle>Add Your Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <Select value={newRating} onValueChange={setNewRating}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    {/* <SelectContent>
                      <SelectItem value="5">5 stars</SelectItem>
                      <SelectItem value="4">4 stars</SelectItem>
                      <SelectItem value="3">3 stars</SelectItem>
                      <SelectItem value="2">2 stars</SelectItem>
                      <SelectItem value="1">1 star</SelectItem>
                    </SelectContent> */}
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Comment</label>
                  <Input
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your review"
                  />
                </div>
                <Button onClick={handleAddReview} className="w-full">Submit Review</Button>
              </CardContent>
            </Card>

            {/* Existing Reviews */}
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <Card key={review.id} className="shadow-card-travel">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{review.customerName}</h4>
                              {review.verified && (
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <CheckCircle className="h-3 w-3" /> Verified
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {renderStars(review.rating)}
                            <span className="text-sm font-medium">{review.rating}.0</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <h3 className="text-xl font-semibold mb-2">No reviews found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters to see more reviews.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
