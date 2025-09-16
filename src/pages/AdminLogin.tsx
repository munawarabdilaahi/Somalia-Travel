// =================== AdminPage.tsx ===================
import { useState } from "react";
import { Package, Users, DollarSign, Star, Eye, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { travelPackages } from "@/data/packages";
import { Booking } from "@/types/travel";

// =================== Xogtaada ===================
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
    createdAt: "2024-02-01T10:00:00Z"
  },
  {
    id: "B002",
    packageId: "somalia-2",
    customerName: "Amina Yusuf",
    email: "amina.yusuf@email.com",
    phone: "+252-61-987-6543",
    travelers: 3,
    departureDate: "2024-04-10",
    specialRequests: "Window seats",
    totalPrice: 2697,
    status: "pending",
    createdAt: "2024-02-05T11:30:00Z"
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
    customerName: "Fatima Ali",
    email: "fatima.ali@email.com",
    phone: "+252-61-555-9876",
    travelers: 2,
    departureDate: "2024-06-01",
    specialRequests: "Extra luggage",
    totalPrice: 1598,
    status: "confirmed",
    createdAt: "2024-03-01T08:15:00Z"
  },
  {
    id: "B005",
    packageId: "somalia-1",
    customerName: "Hassan Mohamed",
    email: "hassan.mohamed@email.com",
    phone: "+252-90-321-4567",
    travelers: 4,
    departureDate: "2024-07-12",
    specialRequests: "Child seats",
    totalPrice: 3596,
    status: "pending",
    createdAt: "2024-03-10T14:45:00Z"
  },
  {
    id: "B006",
    packageId: "somalia-4",
    customerName: "Zahra Osman",
    email: "zahra.osman@email.com",
    phone: "+252-61-678-1234",
    travelers: 1,
    departureDate: "2024-08-05",
    specialRequests: "Wheelchair accessible",
    totalPrice: 899,
    status: "confirmed",
    createdAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "B007",
    packageId: "somalia-2",
    customerName: "Abdirahman Noor",
    email: "abdirahman.noor@email.com",
    phone: "+252-61-777-8888",
    travelers: 2,
    departureDate: "2024-09-15",
    specialRequests: "Vegetarian meals",
    totalPrice: 1798,
    status: "cancelled",
    createdAt: "2024-04-01T09:00:00Z"
  },
  {
    id: "B008",
    packageId: "somalia-1",
    customerName: "Leyla Farah",
    email: "leyla.farah@email.com",
    phone: "+252-90-456-7890",
    travelers: 3,
    departureDate: "2024-10-10",
    specialRequests: "Aisle seats",
    totalPrice: 2697,
    status: "pending",
    createdAt: "2024-04-12T13:20:00Z"
  },
  {
    id: "B009",
    packageId: "somalia-3",
    customerName: "Abdullahi Warsame",
    email: "abdullahi.warsame@email.com",
    phone: "+252-61-999-1234",
    travelers: 1,
    departureDate: "2024-11-05",
    specialRequests: "No peanuts",
    totalPrice: 899,
    status: "confirmed",
    createdAt: "2024-04-20T08:50:00Z"
  },
  {
    id: "B010",
    packageId: "somalia-3",
    customerName: "Sahra Ahmed",
    email: "sahra.ahmed@email.com",
    phone: "+252-61-111-2222",
    travelers: 2,
    departureDate: "2024-12-01",
    specialRequests: "Extra pillows",
    totalPrice: 1798,
    status: "pending",
    createdAt: "2024-05-01T10:10:00Z"
  },
  {
    id: "B011",
    packageId: "somalia-3",
    customerName: "Ibrahim Ali",
    email: "ibrahim.ali@email.com",
    phone: "+252-90-234-5678",
    travelers: 4,
    departureDate: "2025-01-15",
    specialRequests: "Window seats",
    totalPrice: 3596,
    status: "confirmed",
    createdAt: "2024-05-10T09:30:00Z"
  },
  {
    id: "B012",
    packageId: "somalia-2",
    customerName: "Khadija Omar",
    email: "khadija.omar@email.com",
    phone: "+252-61-333-4444",
    travelers: 1,
    departureDate: "2025-02-05",
    specialRequests: "Gluten-free meals",
    totalPrice: 899,
    status: "cancelled",
    createdAt: "2024-05-20T12:15:00Z"
  },
  {
    id: "B013",
    packageId: "somalia-2",
    customerName: "Mohamud Hassan",
    email: "mohamud.hassan@email.com",
    phone: "+252-61-555-6666",
    travelers: 2,
    departureDate: "2025-03-10",
    specialRequests: "Extra luggage",
    totalPrice: 1798,
    status: "pending",
    createdAt: "2024-06-01T14:00:00Z"
  },
  {
    id: "B014",
    packageId: "somalia-1",
    customerName: "Faduma Yusuf",
    email: "faduma.yusuf@email.com",
    phone: "+252-90-567-8901",
    travelers: 3,
    departureDate: "2025-04-05",
    specialRequests: "Vegan meals",
    totalPrice: 2697,
    status: "confirmed",
    createdAt: "2024-06-10T09:45:00Z"
  },
  {
    id: "B015",
    packageId: "somalia-1",
    customerName: "Ahmed Abdirahman",
    email: "ahmed.abdirahman@email.com",
    phone: "+252-61-777-8889",
    travelers: 1,
    departureDate: "2025-05-01",
    specialRequests: "Wheelchair accessible",
    totalPrice: 899,
    status: "pending",
    createdAt: "2024-06-20T08:30:00Z"
  },
  {
    id: "B016",
    packageId: "somalia-1",
    customerName: "Asha Mohamed",
    email: "asha.mohamed@email.com",
    phone: "+252-61-888-9999",
    travelers: 2,
    departureDate: "2025-06-12",
    specialRequests: "Child meals",
    totalPrice: 1798,
    status: "confirmed",
    createdAt: "2024-07-01T10:50:00Z"
  },
  {
    id: "B017",
    packageId: "somalia-1",
    customerName: "Hussein Abdullahi",
    email: "hussein.abdullahi@email.com",
    phone: "+252-90-678-9012",
    travelers: 3,
    departureDate: "2025-07-10",
    specialRequests: "No nuts",
    totalPrice: 2697,
    status: "cancelled",
    createdAt: "2024-07-10T09:15:00Z"
  },
  {
    id: "B018",
    packageId: "somalia-4",
    customerName: "Muna Farah",
    email: "muna.farah@email.com",
    phone: "+252-61-999-0000",
    travelers: 1,
    departureDate: "2025-08-05",
    specialRequests: "Window seat",
    totalPrice: 899,
    status: "pending",
    createdAt: "2024-07-20T11:40:00Z"
  },
  {
    id: "B019",
    packageId: "somalia-4",
    customerName: "Abdirizak Osman",
    email: "abdirizak.osman@email.com",
    phone: "+252-61-111-3333",
    travelers: 2,
    departureDate: "2025-09-01",
    specialRequests: "Extra pillows",
    totalPrice: 1798,
    status: "confirmed",
    createdAt: "2024-08-01T08:20:00Z"
  },
  {
    id: "B020",
    packageId: "somalia-3",
    customerName: "Sahra Mohamed",
    email: "sahra.mohamed@email.com",
    phone: "+252-90-789-0123",
    travelers: 4,
    departureDate: "2025-10-10",
    specialRequests: "Vegan meals",
    totalPrice: 3596,
    status: "pending",
    createdAt: "2024-08-10T09:55:00Z"
  }
];

// =================== Admin Credentials ===================
const ADMIN_EMAIL = "munawar@gmail.com";
const ADMIN_PASSWORD = "admin123";

// =================== Admin Dashboard Component ===================
const AdminPageContent = ({ onLogout }: { onLogout: () => void }) => {
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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">Travel booking management system</p>
          </div>
          <Button variant="outline" onClick={onLogout} className="flex items-center space-x-2">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
          </TabsList>

          {/* Overview */}
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

          {/* Packages */}
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

          {/* Bookings */}
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

// =================== Login Component with Password Toggle ===================
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Email or password is incorrect");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  if (isAuthenticated) {
    return <AdminPageContent onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background-light to-accent/10">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="mb-6 relative">
          <label className="block mb-1 font-medium">Password</label>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-9 text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
  );
};

export default AdminLogin;
