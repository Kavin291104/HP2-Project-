import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ShoppingCart, Heart, User, Settings, LogOut } from "lucide-react";

export default function Dashboard() {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "March 2024",
    totalOrders: 12,
    favoriteBooks: 8,
    readingGoal: 24
  });

  const recentOrders = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", date: "Dec 15, 2024", status: "Delivered" },
    { id: 2, title: "Atomic Habits", author: "James Clear", date: "Dec 10, 2024", status: "Shipped" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", date: "Dec 5, 2024", status: "Delivered" }
  ];

  const recommendations = [
    { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: 19.99 },
    { title: "Where the Crawdads Sing", author: "Delia Owens", price: 23.99 },
    { title: "Educated", author: "Tara Westover", price: 26.99 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-muted-foreground">
            Member since {user.joinDate}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {user.totalOrders}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Orders</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {user.favoriteBooks}
                  </div>
                  <div className="text-sm text-muted-foreground">Favorite Books</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {user.readingGoal}
                  </div>
                  <div className="text-sm text-muted-foreground">Reading Goal</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{order.title}</h4>
                        <p className="text-sm text-muted-foreground">by {order.author}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                        {order.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Orders
                </Button>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Recommended for You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((book, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{book.title}</h4>
                        <p className="text-sm text-muted-foreground">by {book.author}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground">${book.price}</div>
                        <Button size="sm" className="mt-1">Add to Cart</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <p className="text-foreground">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-foreground">{user.email}</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Books
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  My Wishlist
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order History
                </Button>
                <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}