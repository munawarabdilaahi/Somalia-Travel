import { useAuth } from '@/components/AuthProvider';
import { Navigate } from 'react-router-dom';
import { useState } from "react";
import { Package, Users, DollarSign, Star, Calendar, Eye, Edit, Trash2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { travelPackages } from "@/data/packages";
import { Booking } from "@/types/travel";

const mockBookings: Booking[] = [
  {
    id: "B001",
    packageId: "somalia-1",
    customerName: "Ahmed Hassan",
    email: "ahmed.hassan@email.com",
    phone: "+252-61-234-5678",
    travelers: 2,
    departureDate: "2024-03-15",
    specialRequests: "Halal meals preferred",
    totalPrice: 1798,
    status: "confirmed",
    createdAt: "2024-02-10T10:30:00Z"
  },

  {
    id: "B001",
    packageId: "somalia-4",
    customerName: "Ahmed Maxamed",
    email: "ahmed.m@email.com",
    phone: "+252-61-544-1970",
    travelers: 2,
    departureDate: "2024-08-22",
    specialRequests: "Halal meals preferred",
    totalPrice: 2697,
    status: "confirmed",
    createdAt: "2024-02-10T10:30:00Z"
  },
  {
    id: "B002",
    packageId: "somalia-2",
    customerName: "Fatima Ali",
    email: "fatima.ali@email.com",
    phone: "+252-61-987-6543",
    travelers: 4,
    departureDate: "2024-04-10",
    specialRequests: "Window seats on flights",
    totalPrice: 3596,
    status: "pending",
    createdAt: "2024-02-12T14:45:00Z"
  },
  {
    id: "B003",
    packageId: "somalia-3",
    customerName: "Mohamed Abdi",
    email: "mohamed.abdi@email.com",
    phone: "+252-90-123-4567",
    travelers: 1,
    departureDate: "2024-05-05",
    specialRequests: "Vegan meals",
    totalPrice: 899,
    status: "cancelled",
    createdAt: "2024-02-14T09:20:00Z"
  },
  {
    id: "B004",
    packageId: "somalia-4",
    customerName: "Aisha Yusuf",
    email: "aisha.yusuf@email.com",
    phone: "+252-91-456-7890",
    travelers: 3,
    departureDate: "2024-06-01",
    specialRequests: "Extra luggage allowance",
    totalPrice: 2697,
    status: "confirmed",
    createdAt: "2024-02-16T11:00:00Z"
  },
  {
    id: "B005",
    packageId: "somalia-1",
    customerName: "Hassan Mohamed",
    email: "hassan.mohamed@email.com",
    phone: "+252-61-333-2222",
    travelers: 2,
    departureDate: "2024-07-20",
    specialRequests: "Near swimming pool",
    totalPrice: 1798,
    status: "confirmed",
    createdAt: "2024-02-18T08:10:00Z"
  },
  {
    id: "B006",
    packageId: "somalia-2",
    customerName: "Layla Ibrahim",
    email: "layla.ibrahim@email.com",
    phone: "+252-62-111-4444",
    travelers: 5,
    departureDate: "2024-08-02",
    specialRequests: "Family suite rooms",
    totalPrice: 4495,
    status: "pending",
    createdAt: "2024-02-19T13:25:00Z"
  },
  {
    id: "B007",
    packageId: "somalia-3",
    customerName: "Omar Ahmed",
    email: "omar.ahmed@email.com",
    phone: "+252-63-765-4321",
    travelers: 2,
    departureDate: "2024-09-10",
    specialRequests: "Guided tours only",
    totalPrice: 1798,
    status: "confirmed",
    createdAt: "2024-02-20T16:40:00Z"
  },
  {
    id: "B008",
    packageId: "somalia-4",
    customerName: "Khadra Warsame",
    email: "khadra.warsame@email.com",
    phone: "+252-90-222-3333",
    travelers: 3,
    departureDate: "2024-10-15",
    specialRequests: "Airport pickup",
    totalPrice: 2697,
    status: "confirmed",
    createdAt: "2024-02-21T07:55:00Z"
  },
  {
    id: "B009",
    packageId: "somalia-1",
    customerName: "Abdullahi Osman",
    email: "abdullahi.osman@email.com",
    phone: "+252-61-888-7777",
    travelers: 1,
    departureDate: "2024-11-05",
    specialRequests: "Early check-in",
    totalPrice: 899,
    status: "pending",
    createdAt: "2024-02-22T10:15:00Z"
  },
  {
    id: "B010",
    packageId: "somalia-2",
    customerName: "Maryam Farah",
    email: "maryam.farah@email.com",
    phone: "+252-62-555-4444",
    travelers: 4,
    departureDate: "2024-12-12",
    specialRequests: "Kids meals included",
    totalPrice: 3596,
    status: "confirmed",
    createdAt: "2024-02-23T15:05:00Z"
  },
  {
    id: "B011",
    packageId: "somalia-3",
    customerName: "Ali Hussein",
    email: "ali.hussein@email.com",
    phone: "+252-63-999-0000",
    travelers: 2,
    departureDate: "2025-01-10",
    specialRequests: "Accessible room",
    totalPrice: 1798,
    status: "cancelled",
    createdAt: "2024-02-24T12:30:00Z"
  },
  {
    id: "B012",
    packageId: "somalia-4",
    customerName: "Nadia Mohamed",
    email: "nadia.mohamed@email.com",
    phone: "+252-91-123-7890",
    travelers: 3,
    departureDate: "2025-02-05",
    specialRequests: "Balcony view",
    totalPrice: 2697,
    status: "confirmed",
    createdAt: "2024-02-25T09:50:00Z"
  },
  {
    id: "B013",
    packageId: "somalia-1",
    customerName: "Yusuf Abdikarim",
    email: "yusuf.abdikarim@email.com",
    phone: "+252-61-321-4567",
    travelers: 2,
    departureDate: "2025-03-01",
    specialRequests: "Wheelchair access",
    totalPrice: 1798,
    status: "pending",
    createdAt: "2024-02-26T18:40:00Z"
  },
  {
    id: "B014",
    packageId: "somalia-2",
    customerName: "Halima Noor",
    email: "halima.noor@email.com",
    phone: "+252-62-765-1111",
    travelers: 5,
    departureDate: "2025-03-25",
    specialRequests: "Adjacent rooms",
    totalPrice: 4495,
    status: "confirmed",
    createdAt: "2024-02-27T07:10:00Z"
  },
  {
    id: "B015",
    packageId: "somalia-3",
    customerName: "Ismail Mohamed",
    email: "ismail.mohamed@email.com",
    phone: "+252-63-456-9999",
    travelers: 1,
    departureDate: "2025-04-15",
    specialRequests: "Vegetarian meals",
    totalPrice: 899,
    status: "confirmed",
    createdAt: "2024-02-28T14:25:00Z"
  },
  {
    id: "B016",
    packageId: "somalia-4",
    customerName: "Fadumo Abdi",
    email: "fadumo.abdi@email.com",
    phone: "+252-90-123-4567",
    travelers: 3,
    departureDate: "2025-05-05",
    specialRequests: "Tour guide in Somali",
    totalPrice: 2697,
    status: "pending",
    createdAt: "2024-03-01T11:00:00Z"
  },
  {
    id: "B017",
    packageId: "somalia-1",
    customerName: "Salman Ali",
    email: "salman.ali@email.com",
    phone: "+252-61-432-1111",
    travelers: 2,
    departureDate: "2025-05-28",
    specialRequests: "Quiet room",
    totalPrice: 1798,
    status: "confirmed",
    createdAt: "2024-03-02T09:45:00Z"
  },
  {
    id: "B018",
    packageId: "somalia-2",
    customerName: "Zahra Ibrahim",
    email: "zahra.ibrahim@email.com",
    phone: "+252-62-222-8888",
    travelers: 4,
    departureDate: "2025-06-20",
    specialRequests: "Sea view rooms",
    totalPrice: 3596,
    status: "confirmed",
    createdAt: "2024-03-03T08:30:00Z"
  },
  {
    id: "B019",
    packageId: "somalia-3",
    customerName: "Khalid Omar",
    email: "khalid.omar@email.com",
    phone: "+252-63-777-2222",
    travelers: 2,
    departureDate: "2025-07-10",
    specialRequests: "Airport shuttle",
    totalPrice: 1798,
    status: "cancelled",
    createdAt: "2024-03-04T17:15:00Z"
  },
  {
    id: "B020",
    packageId: "somalia-4",
    customerName: "Samira Ahmed",
    email: "samira.ahmed@email.com",
    phone: "+252-91-654-3333",
    travelers: 3,
    departureDate: "2025-08-05",
    specialRequests: "Extra blankets",
    totalPrice: 2697,
    status: "confirmed",
    createdAt: "2024-03-05T19:50:00Z"
  }
];

const AdminPage = () => {

  const [activeTab, setActiveTab] = useState("overview");
  const totalPackages = travelPackages.length;
  const totalBookings = mockBookings.length;
  const totalRevenue = mockBookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
  const averageRating = travelPackages.reduce((sum, pkg) => sum + pkg.rating, 0) / totalPackages;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed": return <Badge className="bg-emerald-500">Confirmed</Badge>;
      case "pending": return <Badge className="bg-amber-500">Pending</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-light to-accent/10">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">Travel booking management system</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Packages</CardTitle>
                  <Package className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{totalPackages}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                  <Users className="h-4 w-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">{totalBookings}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">${totalRevenue.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                  <Star className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-600">{averageRating.toFixed(1)}/5</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <Card>
              <CardHeader>
                <CardTitle>Travel Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Package</TableHead>
                      <TableHead>Destination</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {travelPackages.map((pkg) => (
                      <TableRow key={pkg.id}>
                        <TableCell>{pkg.title}</TableCell>
                        <TableCell>{pkg.destination}</TableCell>
                        <TableCell>${pkg.price}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm"><Eye className="h-4 w-4" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Booking Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.customerName}</TableCell>
                        <TableCell>{travelPackages.find(p => p.id === booking.packageId)?.title}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>${booking.totalPrice}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;