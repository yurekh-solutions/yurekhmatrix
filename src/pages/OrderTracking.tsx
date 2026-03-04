import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Order {
  _id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  productName: string;
  quantity: number;
  unit: string;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  deliveryAddress: string;
  expectedDeliveryDate?: string;
  actualDeliveryDate?: string;
  trackingNumber?: string;
  createdAt: string;
  supplierId?: {
    companyName: string;
    phone: string;
    email: string;
  };
}

interface TimelineEvent {
  status: string;
  timestamp: string;
  description: string;
}

const statusSteps = [
  { key: 'pending', label: 'Order Placed', icon: Package },
  { key: 'confirmed', label: 'Confirmed', icon: CheckCircle },
  { key: 'processing', label: 'Processing', icon: Clock },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: CheckCircle },
];

export default function OrderTracking() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderTracking();
  }, [orderId]);

  const fetchOrderTracking = async () => {
    try {
      const response = await fetch(`${API_URL}/api/orders/${orderId}`);
      const data = await response.json();

      if (data.success) {
        setOrder(data.data.order);
        setTimeline(data.data.timeline);
      } else {
        alert('Order not found');
        navigate('/my-orders');
      }
    } catch (error) {
      console.error('Error fetching order:', error);
      alert('Error loading order tracking');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIndex = (status: string) => {
    return statusSteps.findIndex(step => step.key === status);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c15738]"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order not found</h2>
          <Button onClick={() => navigate('/my-orders')} className="bg-[#c15738] hover:bg-[#5c2d23]">
            Back to My Orders
          </Button>
        </div>
      </div>
    );
  }

  const currentStatusIndex = getStatusIndex(order.status);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/my-orders')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Orders
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Track Order #{order._id.slice(-8)}
              </h1>
              <p className="text-gray-600">Ordered on {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <Badge className={
              order.status === 'delivered' ? 'bg-green-500' :
              order.status === 'shipped' ? 'bg-blue-500' :
              order.status === 'cancelled' ? 'bg-red-500' :
              'bg-yellow-500'
            }>
              {order.status.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Timeline */}
        <Card className="p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Order Status</h2>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200">
              <div 
                className="bg-[#c15738] transition-all duration-500"
                style={{ 
                  height: `${(currentStatusIndex / (statusSteps.length - 1)) * 100}%`,
                  width: '2px'
                }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {statusSteps.map((step, index) => {
                const isCompleted = index <= currentStatusIndex;
                const isCurrent = index === currentStatusIndex;
                const Icon = step.icon;

                return (
                  <div key={step.key} className="relative flex items-start gap-6">
                    {/* Icon */}
                    <div className={`
                      relative z-10 flex items-center justify-center w-16 h-16 rounded-full
                      ${isCompleted ? 'bg-[#c15738]' : 'bg-gray-300'}
                      ${isCurrent ? 'ring-4 ring-[#c15738]/20' : ''}
                      transition-all duration-300
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3">
                      <h3 className={`text-lg font-bold mb-1 ${isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.label}
                      </h3>
                      {timeline[index] && (
                        <div>
                          <p className="text-sm text-gray-600">{timeline[index].description}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(timeline[index].timestamp).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Product Info */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#c15738]" />
              Product Details
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Product</p>
                <p className="font-semibold text-gray-900">{order.productName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Quantity</p>
                <p className="font-semibold text-gray-900">{order.quantity} {order.unit}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-semibold text-gray-900">₹{order.totalAmount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Payment Status</p>
                <Badge variant="outline" className={
                  order.paymentStatus === 'paid' 
                    ? 'border-green-500 text-green-700' 
                    : 'border-yellow-500 text-yellow-700'
                }>
                  {order.paymentStatus}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Delivery Info */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#c15738]" />
              Delivery Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Delivery Address</p>
                <p className="font-semibold text-gray-900">{order.deliveryAddress}</p>
              </div>
              {order.trackingNumber && (
                <div>
                  <p className="text-sm text-gray-600">Tracking Number</p>
                  <p className="font-semibold text-gray-900">{order.trackingNumber}</p>
                </div>
              )}
              {order.expectedDeliveryDate && (
                <div>
                  <p className="text-sm text-gray-600">Expected Delivery</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(order.expectedDeliveryDate).toLocaleDateString()}
                  </p>
                </div>
              )}
              {order.actualDeliveryDate && (
                <div>
                  <p className="text-sm text-gray-600">Delivered On</p>
                  <p className="font-semibold text-green-600">
                    {new Date(order.actualDeliveryDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Supplier Info */}
        {order.supplierId && (
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Supplier Information</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Company Name</p>
                <p className="font-semibold text-gray-900">{order.supplierId.companyName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Phone className="w-4 h-4" /> Phone
                </p>
                <p className="font-semibold text-gray-900">{order.supplierId.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Mail className="w-4 h-4" /> Email
                </p>
                <p className="font-semibold text-gray-900">{order.supplierId.email}</p>
              </div>
            </div>
          </Card>
        )}

        {/* Actions */}
        {order.status === 'pending' && order.paymentStatus === 'pending' && (
          <div className="mt-6 text-center">
            <Button 
              onClick={() => navigate(`/payment/${order._id}`)}
              className="bg-[#c15738] hover:bg-[#5c2d23]"
            >
              Complete Payment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
