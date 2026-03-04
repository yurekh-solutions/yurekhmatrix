import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Clock, Truck, CheckCircle, XCircle, Eye } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Order {
  _id: string;
  customerName: string;
  productName: string;
  quantity: number;
  unit: string;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  deliveryAddress: string;
  expectedDeliveryDate?: string;
  trackingNumber?: string;
  createdAt: string;
  supplierId?: {
    companyName: string;
    phone: string;
  };
}

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-yellow-500', icon: Clock },
  confirmed: { label: 'Confirmed', color: 'bg-blue-500', icon: CheckCircle },
  processing: { label: 'Processing', color: 'bg-purple-500', icon: Package },
  shipped: { label: 'Shipped', color: 'bg-indigo-500', icon: Truck },
  delivered: { label: 'Delivered', color: 'bg-green-500', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-red-500', icon: XCircle },
};

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if email already in localStorage
    const savedEmail = localStorage.getItem('trackingEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setEmailSubmitted(true);
      fetchOrders(savedEmail);
    }
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    localStorage.setItem('trackingEmail', email);
    setEmailSubmitted(true);
    fetchOrders(email);
  };

  const fetchOrders = async (emailAddress: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/orders/customer?email=${emailAddress}`);
      const data = await response.json();

      if (data.success) {
        setOrders(data.data);
      } else {
        alert('Failed to load orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Error loading orders');
    } finally {
      setLoading(false);
    }
  };

  const handleChangeEmail = () => {
    localStorage.removeItem('trackingEmail');
    setEmailSubmitted(false);
    setEmail('');
    setOrders([]);
  };

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  // Email Input Form (shown if email not submitted)
  if (!emailSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-6">
            <Package className="w-16 h-16 mx-auto text-[#c15738] mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Orders</h1>
            <p className="text-gray-600">Enter your email to view order history</p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c15738] focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                ℹ️ Enter the email you used when placing your order
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#c15738] hover:bg-[#5c2d23] py-6 text-lg"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Loading...
                </div>
              ) : (
                'View My Orders'
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              No account needed! We'll show all orders placed with this email.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c15738]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
              <p className="text-gray-600">Tracking orders for: <span className="font-semibold">{email}</span></p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleChangeEmail}
              className="border-[#c15738] text-[#c15738] hover:bg-[#c15738] hover:text-white"
            >
              Change Email
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-[#c15738] hover:bg-[#5c2d23]' : ''}
          >
            All ({orders.length})
          </Button>
          {Object.entries(statusConfig).map(([status, config]) => (
            <Button
              key={status}
              variant={filter === status ? 'default' : 'outline'}
              onClick={() => setFilter(status)}
              className={filter === status ? 'bg-[#c15738] hover:bg-[#5c2d23]' : ''}
            >
              {config.label} ({orders.filter(o => o.status === status).length})
            </Button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card className="p-12 text-center">
            <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600 mb-6">
              {filter === 'all' 
                ? 'You haven\'t placed any orders yet' 
                : `No orders with status: ${statusConfig[filter as keyof typeof statusConfig]?.label}`}
            </p>
            <Button onClick={() => navigate('/products')} className="bg-[#c15738] hover:bg-[#5c2d23]">
              Browse Products
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6">
            {filteredOrders.map((order) => {
              const StatusIcon = statusConfig[order.status as keyof typeof statusConfig]?.icon || Package;
              const statusInfo = statusConfig[order.status as keyof typeof statusConfig];

              return (
                <Card key={order._id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <StatusIcon className="w-5 h-5 text-[#c15738]" />
                        <h3 className="text-lg font-bold text-gray-900">
                          Order #{order._id.slice(-8)}
                        </h3>
                        <Badge className={`${statusInfo?.color || 'bg-gray-500'} text-white`}>
                          {statusInfo?.label || order.status}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <p className="text-gray-700">
                          <span className="font-semibold">Product:</span> {order.productName}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Quantity:</span> {order.quantity} {order.unit}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Amount:</span> ₹{order.totalAmount.toLocaleString()}
                        </p>
                        {order.supplierId && (
                          <p className="text-gray-700">
                            <span className="font-semibold">Supplier:</span> {order.supplierId.companyName}
                          </p>
                        )}
                        <p className="text-gray-600 text-xs">
                          Ordered on {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      {/* Payment Status */}
                      <div className="mt-3">
                        <Badge variant="outline" className={
                          order.paymentStatus === 'paid' 
                            ? 'border-green-500 text-green-700' 
                            : 'border-yellow-500 text-yellow-700'
                        }>
                          Payment: {order.paymentStatus}
                        </Badge>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 md:w-48">
                      <Button 
                        onClick={() => navigate(`/track/${order._id}`)}
                        className="w-full bg-[#c15738] hover:bg-[#5c2d23]"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Track Order
                      </Button>

                      {order.trackingNumber && (
                        <p className="text-xs text-center text-gray-600">
                          Tracking: {order.trackingNumber}
                        </p>
                      )}

                      {order.status === 'pending' && order.paymentStatus === 'pending' && (
                        <Button 
                          variant="outline"
                          onClick={() => navigate(`/payment/${order._id}`)}
                          className="w-full"
                        >
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
