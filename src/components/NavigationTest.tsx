import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NavigationTest = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Navigation Test</h1>
      
      <div className="space-y-4">
        <div>
          <Link to="/products">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Go to Products Page
            </Button>
          </Link>
        </div>
        
        <div>
          <Link to="/products/sample-1">
            <Button variant="outline">
              Go to MS SHEETS Detail (sample-1)
            </Button>
          </Link>
        </div>
        
        <div>
          <Link to="/products/sample-2">
            <Button variant="outline">
              Go to SAND Detail (sample-2)
            </Button>
          </Link>
        </div>
        
        <div>
          <Link to="/products/sample-3">
            <Button variant="outline">
              Go to SS CHANNELS Detail (sample-3)
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationTest;