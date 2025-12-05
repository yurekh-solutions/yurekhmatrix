import React, { useState } from 'react';
import { Package, Plus, Trash2, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface Material {
  materialName: string;
  category: string;
  grade: string;
  specification: string;
  quantity: string;
  unit: string;
  targetPrice: string;
}

const MaterialInquiryForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryNumber, setInquiryNumber] = useState('');
  
  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    deliveryLocation: '',
    deliveryAddress: '',
    totalEstimatedValue: '',
    paymentTerms: '',
    additionalRequirements: '',
  });

  const [materials, setMaterials] = useState<Material[]>([
    {
      materialName: '',
      category: '',
      grade: '',
      specification: '',
      quantity: '',
      unit: 'MT',
      targetPrice: '',
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMaterialChange = (index: number, field: keyof Material, value: string) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index][field] = value;
    setMaterials(updatedMaterials);
  };

  const addMaterial = () => {
    setMaterials([
      ...materials,
      {
        materialName: '',
        category: '',
        grade: '',
        specification: '',
        quantity: '',
        unit: 'MT',
        targetPrice: '',
      },
    ]);
  };

  const removeMaterial = (index: number) => {
    if (materials.length > 1) {
      setMaterials(materials.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.customerName || !formData.email || !formData.phone || !formData.deliveryLocation) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (materials.some(m => !m.materialName || !m.quantity)) {
      toast.error('Please fill in material details');
      return;
    }

    setLoading(true);

    try {
      const submissionData = {
        ...formData,
        materials: materials.map(m => ({
          materialName: m.materialName,
          category: m.category || 'General',
          grade: m.grade,
          specification: m.specification,
          quantity: parseFloat(m.quantity) || 0,
          unit: m.unit,
          targetPrice: m.targetPrice ? parseFloat(m.targetPrice) : undefined,
        })),
        totalEstimatedValue: formData.totalEstimatedValue ? parseFloat(formData.totalEstimatedValue) : undefined,
      };

      console.log('📤 Submitting to:', `${API_BASE_URL}/material-inquiries`);
      console.log('📦 Data:', submissionData);

      const response = await fetch(`${API_BASE_URL}/material-inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      console.log('📥 Response status:', response.status);

      const data = await response.json();
      console.log('📥 Response data:', data);

      if (data.success) {
        setSubmitted(true);
        setInquiryNumber(data.data.inquiryNumber);
        toast.success('Material inquiry submitted successfully!');
        
        console.log('✅ SUCCESS! Inquiry Number:', data.data.inquiryNumber);
        console.log('🆔 Database ID:', data.data._id);
        
        // Show success message
        setTimeout(() => {
          toast.info('You will receive a quotation via WhatsApp and Email shortly');
        }, 1000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.error('❌ Submission error:', error);
      toast.error('Failed to submit inquiry: ' + errorMessage);
      
      // Show detailed error for debugging
      if (errorMessage.includes('fetch')) {
        toast.error('Cannot connect to backend. Make sure backend is running on port 5000');
        console.error('⚠️ Backend not reachable at:', API_BASE_URL);
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <Card className="max-w-2xl w-full border-0 shadow-2xl bg-white/90 backdrop-blur-xl relative z-10 animate-scale-in">
          <CardContent className="pt-10 pb-10 text-center">
            <div className="relative mb-6">
              {/* Confetti particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-confetti"
                  style={{
                    left: '50%',
                    top: '50%',
                    background: `hsl(${i * 30}, 70%, 60%)`,
                    animationDelay: `${i * 0.1}s`,
                    transform: `rotate(${i * 30}deg) translateY(-100px)`,
                  }}
                />
              ))}

              {/* Success icon with gradient */}
              <div className="relative z-10 w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 animate-bounce-in">
                <CheckCircle className="w-14 h-14 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Inquiry Submitted Successfully!
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-6 shadow-lg">
              <p className="text-sm text-gray-600 mb-2 font-medium">Your Inquiry Number:</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{inquiryNumber}</p>
            </div>

            <div className="text-left bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 mb-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                What Happens Next?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <span>Your inquiry has been saved in our database</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <span>Our team will receive a WhatsApp notification</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <span>You'll receive a detailed quotation within 24 hours</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <span>We'll contact you via phone/email for any clarifications</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    customerName: '',
                    companyName: '',
                    email: '',
                    phone: '',
                    deliveryLocation: '',
                    deliveryAddress: '',
                    totalEstimatedValue: '',
                    paymentTerms: '',
                    additionalRequirements: '',
                  });
                  setMaterials([{
                    materialName: '',
                    category: '',
                    grade: '',
                    specification: '',
                    quantity: '',
                    unit: 'MT',
                    targetPrice: '',
                  }]);
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg"
              >
                Submit Another Inquiry
              </Button>
              
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full border-2 border-purple-300 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 py-6 text-lg"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>

        <style>{`
          @keyframes confetti {
            0% {
              transform: translate(-50%, -50%) translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) translateY(-250px) rotate(720deg);
              opacity: 0;
            }
          }

          @keyframes bounce-in {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes scale-in {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-confetti {
            animation: confetti 1.8s ease-out forwards;
          }

          .animate-bounce-in {
            animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .animate-scale-in {
            animation: scale-in 0.4s ease-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-12 px-4 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white rounded-t-xl p-8 relative overflow-hidden">
            {/* Header animated background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <CardTitle className="text-4xl flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Package className="w-7 h-7" />
              </div>
              Request Material Quotation
            </CardTitle>
            <CardDescription className="text-purple-100 relative z-10 text-lg mt-2">
              Fill in your details and we'll send you a competitive quotation within 24 hours
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Customer Information */}
              <div className="p-6 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-2xl border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">1</span>
                  Customer Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <Label htmlFor="customerName" className="text-sm font-semibold text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="mt-2 h-12 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    />
                  </div>

                  <div className="group">
                    <Label htmlFor="companyName" className="text-sm font-semibold text-gray-700">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="mt-2 h-12 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    />
                  </div>

                  <div className="group">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="mt-2 h-12 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    />
                  </div>

                  <div className="group">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91XXXXXXXXXX"
                      required
                      className="mt-2 h-12 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Material Requirements */}
              <div className="p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">2</span>
                  Material Requirements
                </h3>

                <div className="space-y-4">
                  {materials.map((material, index) => (
                    <Card key={index} className="border-2 border-purple-200 bg-white/60 backdrop-blur-sm hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                            <span className="w-7 h-7 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg flex items-center justify-center text-sm">{index + 1}</span>
                            Material {index + 1}
                          </h4>
                          {materials.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeMaterial(index)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-300"
                            >
                              <Trash2 className="w-5 h-5" />
                            </Button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-semibold text-gray-700">
                              Material Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              value={material.materialName}
                              onChange={(e) => handleMaterialChange(index, 'materialName', e.target.value)}
                              placeholder="Brick, Steel, Cement..."
                              required
                              className="mt-2 h-11 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Category</Label>
                            <Input
                              value={material.category}
                              onChange={(e) => handleMaterialChange(index, 'category', e.target.value)}
                              placeholder="Construction, Metal..."
                              className="mt-2 h-11 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Grade/Quality</Label>
                            <Input
                              value={material.grade}
                              onChange={(e) => handleMaterialChange(index, 'grade', e.target.value)}
                              placeholder="Grade A, Premium..."
                              className="mt-2 h-11 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-semibold text-gray-700">
                              Quantity <span className="text-red-500">*</span>
                            </Label>
                            <div className="flex gap-2 mt-2">
                              <Input
                                type="number"
                                value={material.quantity}
                                onChange={(e) => handleMaterialChange(index, 'quantity', e.target.value)}
                                placeholder="100"
                                required
                                className="flex-1 h-11 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                              />
                              <select
                                value={material.unit}
                                onChange={(e) => handleMaterialChange(index, 'unit', e.target.value)}
                                className="border-2 border-purple-200 rounded-lg px-4 py-2 h-11 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white font-medium"
                              >
                                <option value="MT">MT</option>
                                <option value="kg">kg</option>
                                <option value="tons">tons</option>
                                <option value="units">units</option>
                                <option value="pieces">pieces</option>
                                <option value="sqft">sqft</option>
                                <option value="bags">bags</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Detailed Specifications</Label>
                            <Textarea
                              value={material.specification}
                              onChange={(e) => handleMaterialChange(index, 'specification', e.target.value)}
                              placeholder="Detailed specs, quality requirements..."
                              rows={3}
                              className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white resize-none"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Target Price ₹ (Optional)</Label>
                            <Input
                              type="number"
                              value={material.targetPrice}
                              onChange={(e) => handleMaterialChange(index, 'targetPrice', e.target.value)}
                              placeholder="Price per unit"
                              className="mt-2 h-11 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={addMaterial}
                    className="w-full border-2 border-dashed border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 py-6 text-base font-semibold"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Another Material
                  </Button>
                </div>
              </div>

              {/* Delivery & Additional Info */}
              <div className="p-6 bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-2xl border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">3</span>
                  Delivery & Additional Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryLocation" className="text-sm font-semibold text-gray-700">
                      Delivery Location <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="deliveryLocation"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleInputChange}
                      placeholder="City, State"
                      required
                      className="mt-2 h-12 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="totalEstimatedValue" className="text-sm font-semibold text-gray-700">Total Estimated Value ₹</Label>
                    <Input
                      id="totalEstimatedValue"
                      name="totalEstimatedValue"
                      type="number"
                      value={formData.totalEstimatedValue}
                      onChange={handleInputChange}
                      placeholder="Total value"
                      className="mt-2 h-12 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="deliveryAddress" className="text-sm font-semibold text-gray-700">Complete Delivery Address</Label>
                    <Textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleInputChange}
                      placeholder="Full address with pincode"
                      rows={2}
                      className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white resize-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="paymentTerms" className="text-sm font-semibold text-gray-700">Preferred Payment Terms</Label>
                    <Input
                      id="paymentTerms"
                      name="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={handleInputChange}
                      placeholder="30 days credit, Advance payment..."
                      className="mt-2 h-12 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="additionalRequirements" className="text-sm font-semibold text-gray-700">Additional Requirements or Notes</Label>
                    <Textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or instructions..."
                      rows={4}
                      className="mt-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 border-t-2 border-gray-200">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white text-lg py-7 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold rounded-xl group"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin mr-2 text-xl">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-2 group-hover:translate-x-1 transition-transform" />
                      Submit Inquiry & Get Quotation
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-600 text-center mt-4 font-medium">
                  By submitting, you agree to receive quotations via WhatsApp and Email
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MaterialInquiryForm;
