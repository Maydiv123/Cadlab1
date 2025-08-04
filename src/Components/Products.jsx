import React, { useState } from 'react';
import './Products.css';
import { FaSearch, FaFilter, FaStar, FaShoppingCart, FaHeart, FaDownload, FaShieldAlt, FaClock, FaUsers, FaGlobe, FaMobile, FaDesktop, FaTablet, FaCheck, FaTimes } from 'react-icons/fa';
import Lottie from 'lottie-react';
import productsAnimation from '../assets/Products.json';
import contactAnimation from '../assets/Contact us.json';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: <FaGlobe /> },
    { id: 'software', name: 'CAD Software', icon: <FaDesktop /> },
    { id: 'hardware', name: 'Hardware Tools', icon: <FaMobile /> },
    { id: 'accessories', name: 'Accessories', icon: <FaTablet /> },
    { id: 'training', name: 'Training & Support', icon: <FaUsers /> }
  ];

  const products = [
    {
      id: 1,
      name: 'AutoCAD 2024 Professional',
      category: 'software',
      price: 1695,
      originalPrice: 1995,
      rating: 4.8,
      reviews: 1247,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BdXRvQ0FEIDIwMjQ8L3RleHQ+PC9zdmc+',
      description: 'Professional CAD software for 2D and 3D design, drafting, and modeling with advanced collaboration features.',
      features: ['2D & 3D Design', 'Cloud Collaboration', 'Mobile App', 'API Access'],
      specifications: {
        'System Requirements': 'Windows 10/11, 8GB RAM, 10GB storage',
        'Supported Formats': 'DWG, DXF, DWF, PDF, 3DS',
        'Cloud Storage': 'Unlimited AutoCAD Web & Mobile',
        'Updates': 'Annual subscription with continuous updates',
        'Support': '24/7 technical support included'
      },
      systemRequirements: {
        'OS': 'Windows 10/11 (64-bit)',
        'Processor': '2.5 GHz or faster',
        'Memory': '8 GB RAM minimum (16 GB recommended)',
        'Graphics': '1 GB GPU with 29 GB/s bandwidth',
        'Storage': '10 GB available space',
        'Network': 'Broadband internet connection'
      },
      inStock: true,
      featured: true,
      bestSeller: true,
      newRelease: false,
      discount: 15,
      licenseType: 'Annual Subscription',
      deployment: 'Cloud & Desktop',
      languages: ['English', 'Spanish', 'French', 'German', 'Italian'],
      compatibility: ['Windows', 'Mac', 'Mobile']
    },
    {
      id: 2,
      name: '3D Connexion SpaceMouse Pro',
      category: 'hardware',
      price: 299,
      originalPrice: 399,
      rating: 4.6,
      reviews: 892,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzY0YmEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4zRCBNb3VzZSBQcm88L3RleHQ+PC9zdmc+',
      description: 'Professional 3D navigation device for precise CAD control with customizable buttons and wireless connectivity.',
      features: ['6-DOF Navigation', 'Programmable Buttons', 'Ergonomic Design', 'Wireless'],
      specifications: {
        'Connectivity': 'Wireless 2.4GHz, USB-C',
        'Battery Life': 'Up to 30 days',
        'Compatibility': 'Windows 10/11, macOS 10.15+',
        'Warranty': '3-year limited warranty',
        'Weight': '280g (9.9 oz)',
        'Dimensions': '120 x 90 x 40 mm'
      },
      systemRequirements: {
        'OS': 'Windows 10/11, macOS 10.15+',
        'USB': 'USB-C port',
        'Software': '3Dconnexion Driver 10.8.0+',
        'Space': '120 x 90 mm desk space'
      },
      inStock: true,
      featured: true,
      bestSeller: false,
      newRelease: true,
      discount: 25,
      warranty: '3 Years',
      connectivity: 'Wireless + USB-C',
      compatibility: ['AutoCAD', 'Revit', 'SolidWorks', 'Fusion 360']
    },
    {
      id: 3,
      name: 'Wacom Cintiq 22 Drawing Tablet',
      category: 'hardware',
      price: 1199,
      originalPrice: 1399,
      rating: 4.7,
      reviews: 567,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmMzZTUwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5XYWNvbSBDaW50aXEgMjI8L3RleHQ+PC9zdmc+',
      description: 'Interactive pen display for natural drawing and design workflow with HD resolution and pressure sensitivity.',
      features: ['22" HD Display', 'Pressure Sensitive', 'Multi-touch', 'Ergonomic Stand'],
      specifications: {
        'Display': '21.5" Full HD (1920 x 1080)',
        'Pen Pressure': '8,192 levels',
        'Response Time': '19ms',
        'Color Gamut': '72% NTSC',
        'Connectivity': 'HDMI, USB-C, USB-A',
        'Included': 'Pro Pen 2, Stand, Cables'
      },
      systemRequirements: {
        'OS': 'Windows 10/11, macOS 10.15+',
        'Graphics': 'DirectX 11 compatible',
        'USB': 'USB 3.0 port',
        'HDMI': 'HDMI 1.4 port',
        'Power': 'AC adapter included'
      },
      inStock: true,
      featured: false,
      bestSeller: true,
      newRelease: false,
      discount: 14,
      warranty: '2 Years',
      resolution: '1920 x 1080',
      pressureLevels: '8,192'
    },
    {
      id: 4,
      name: 'AutoCAD LT 2024',
      category: 'software',
      price: 420,
      originalPrice: 495,
      rating: 4.5,
      reviews: 2341,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzQ0OTVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BdXRvQ0FEIExUIDIwMjQ8L3RleHQ+PC9zdmc+',
      description: '2D drafting and documentation software for professionals with essential CAD tools and cloud integration.',
      features: ['2D Drafting', 'Documentation', 'Cloud Storage', 'Mobile Access'],
      specifications: {
        'System Requirements': 'Windows 10/11, 4GB RAM, 8GB storage',
        'Supported Formats': 'DWG, DXF, DWF, PDF',
        'Cloud Storage': '5GB AutoCAD Web & Mobile',
        'Updates': 'Annual subscription',
        'Support': 'Email and community support'
      },
      systemRequirements: {
        'OS': 'Windows 10/11 (64-bit)',
        'Processor': '2.5 GHz or faster',
        'Memory': '4 GB RAM minimum (8 GB recommended)',
        'Graphics': '1 GB GPU with 29 GB/s bandwidth',
        'Storage': '8 GB available space',
        'Network': 'Broadband internet connection'
      },
      inStock: true,
      featured: false,
      bestSeller: true,
      newRelease: false,
      discount: 15,
      licenseType: 'Annual Subscription',
      deployment: 'Desktop Only',
      languages: ['English', 'Spanish', 'French']
    },
    {
      id: 5,
      name: 'Logitech MX Master 3S Mouse',
      category: 'accessories',
      price: 99,
      originalPrice: 129,
      rating: 4.4,
      reviews: 1892,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOTVhNWE2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NWCBNYXN0ZXIgM1M8L3RleHQ+PC9zdmc+',
      description: 'Precision mouse with customizable buttons for CAD workflows featuring silent clicks and advanced tracking.',
      features: ['8000 DPI Sensor', 'Customizable Buttons', 'Silent Clicks', 'Wireless'],
      specifications: {
        'Sensor': 'Darkfield 8000 DPI',
        'Battery Life': 'Up to 70 days',
        'Connectivity': 'Bluetooth, USB-C receiver',
        'Buttons': '7 programmable buttons',
        'Scroll': 'MagSpeed electromagnetic',
        'Compatibility': 'Windows, macOS, Linux'
      },
      systemRequirements: {
        'OS': 'Windows 10/11, macOS 10.15+, Linux',
        'Bluetooth': 'Bluetooth 3.0+',
        'USB': 'USB-A port for receiver',
        'Software': 'Logi Options+ (optional)'
      },
      inStock: true,
      featured: false,
      bestSeller: true,
      newRelease: false,
      discount: 23,
      warranty: '1 Year',
      connectivity: 'Bluetooth + USB',
      batteryLife: '70 Days'
    },
    {
      id: 6,
      name: 'AutoCAD Training Course Bundle',
      category: 'training',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 445,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTc0YzNjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UcmFpbmluZyBDb3Vyc2U8L3RleHQ+PC9zdmc+',
      description: 'Comprehensive training course with certification covering AutoCAD fundamentals to advanced techniques.',
      features: ['Video Tutorials', 'Practice Projects', 'Certification', 'Lifetime Access'],
      specifications: {
        'Duration': '40+ hours of content',
        'Levels': 'Beginner to Advanced',
        'Projects': '15+ real-world projects',
        'Certification': 'AutoCAD Certified User',
        'Access': 'Lifetime access',
        'Support': 'Instructor support'
      },
      systemRequirements: {
        'Software': 'AutoCAD 2024 (trial or full version)',
        'Internet': 'Broadband connection for streaming',
        'Storage': '2 GB for course materials',
        'Display': '1920 x 1080 minimum'
      },
      inStock: true,
      featured: true,
      bestSeller: false,
      newRelease: true,
      discount: 33,
      duration: '40+ Hours',
      certification: 'AutoCAD Certified User',
      access: 'Lifetime'
    },
    {
      id: 7,
      name: 'Fusion 360 Professional',
      category: 'software',
      price: 545,
      originalPrice: 695,
      rating: 4.7,
      reviews: 1234,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM5YzEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5GdXNpb24gMzYwPC90ZXh0Pjwvc3ZnPg==',
      description: 'Cloud-based 3D CAD/CAM software for product design with advanced simulation and manufacturing tools.',
      features: ['3D Modeling', 'CAM Integration', 'Cloud Collaboration', 'Generative Design'],
      specifications: {
        'System Requirements': 'Windows 10/11, 8GB RAM, 3GB storage',
        'Cloud Storage': 'Unlimited cloud storage',
        'Collaboration': 'Real-time team collaboration',
        'Simulation': 'Advanced simulation tools',
        'Manufacturing': 'CAM and 3D printing support',
        'Updates': 'Continuous cloud updates'
      },
      systemRequirements: {
        'OS': 'Windows 10/11 (64-bit)',
        'Processor': '2.5 GHz or faster',
        'Memory': '8 GB RAM minimum (16 GB recommended)',
        'Graphics': 'DirectX 11 compatible',
        'Storage': '3 GB available space',
        'Network': 'Broadband internet connection'
      },
      inStock: true,
      featured: false,
      bestSeller: false,
      newRelease: true,
      discount: 22,
      licenseType: 'Annual Subscription',
      deployment: 'Cloud-Based',
      collaboration: 'Real-time'
    },
    {
      id: 8,
      name: 'Ergonomic CAD Workstation Chair',
      category: 'accessories',
      price: 349,
      originalPrice: 449,
      rating: 4.6,
      reviews: 678,
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjdhZTYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Fcmdvbm9taWMgQ2hhaXI8L3RleHQ+PC9zdmc+',
      description: 'Professional ergonomic chair designed for long CAD sessions with adjustable features and premium materials.',
      features: ['Lumbar Support', 'Adjustable Arms', 'Breathable Mesh', '5-Year Warranty'],
      specifications: {
        'Material': 'Breathable mesh back, memory foam seat',
        'Adjustments': 'Height, armrests, back angle, lumbar',
        'Weight Capacity': '300 lbs (136 kg)',
        'Dimensions': '27" W x 28" D x 45-52" H',
        'Warranty': '5-year limited warranty',
        'Assembly': 'Tool-free assembly'
      },
      systemRequirements: {
        'Space': '28" x 28" minimum',
        'Floor': 'Hard surface or carpet',
        'User Height': '5\'2" to 6\'6" (158-198 cm)',
        'Weight': '300 lbs maximum'
      },
      inStock: true,
      featured: false,
      bestSeller: false,
      newRelease: false,
      discount: 22,
      warranty: '5 Years',
      material: 'Mesh + Memory Foam',
      weightCapacity: '300 lbs'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
        return b.featured - a.featured;
      case 'newest':
        return b.newRelease - a.newRelease;
      default:
        return 0;
    }
  });

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
    setSelectedProduct(null);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleCompare = (productId) => {
    if (compareList.includes(productId)) {
      setCompareList(prev => prev.filter(id => id !== productId));
    } else if (compareList.length < 3) {
      setCompareList(prev => [...prev, productId]);
    }
  };

  const removeFromCompare = (productId) => {
    setCompareList(prev => prev.filter(id => id !== productId));
  };

  const getCompareProducts = () => {
    return products.filter(product => compareList.includes(product.id));
  };

  return (
    <div className="products-container">
      {/* Hero Section */}
      <div className="products-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Professional CAD Products</h1>
            <p>Discover the latest tools and software for AutoCAD professionals</p>
            <div className="hero-stats">
              <div className="stat">
                <FaUsers />
                <span>50,000+ Professionals</span>
              </div>
              <div className="stat">
                <FaShieldAlt />
                <span>100% Secure</span>
              </div>
              <div className="stat">
                <FaClock />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="lottie-container">
              <Lottie animationData={productsAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="compare-bar">
          <div className="compare-content">
            <div className="compare-items">
              {getCompareProducts().map(product => (
                <div key={product.id} className="compare-item">
                  <img src={product.image} alt={product.name} />
                  <span className="compare-name">{product.name}</span>
                  <button 
                    className="remove-compare"
                    onClick={() => removeFromCompare(product.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
            <div className="compare-actions">
              <button 
                className="compare-btn"
                onClick={() => setShowCompare(true)}
              >
                <img src="/src/assets/justice-scale.png" alt="Compare" style={{ width: '16px', height: '16px' }} /> Compare ({compareList.length})
              </button>
              <button 
                className="clear-compare"
                onClick={() => setCompareList([])}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="products-filters">
        <div className="filter-section">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="search-sort-section">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="sort-section">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {sortedProducts.map(product => (
          <div key={product.id} className={`product-card ${product.featured ? 'featured' : ''} ${product.bestSeller ? 'best-seller' : ''} ${product.newRelease ? 'new-release' : ''}`}>
            {product.featured && <div className="featured-badge">Featured</div>}
            {product.bestSeller && <div className="best-seller-badge">Best Seller</div>}
            {product.newRelease && <div className="new-release-badge">New Release</div>}
            {product.originalPrice > product.price && (
              <div className="discount-badge">
                {product.discount}% OFF
              </div>
            )}
            
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-actions">
                <button 
                  className="action-btn quickview" 
                  title="Quick View" 
                  onClick={() => handleQuickView(product)}
                  
                >
                  <img src="/src/assets/eye.png" alt="Quick View" style={{ width: '16px', height: '16px' }} />
                </button>
                <button 
                  className={`action-btn compare ${compareList.includes(product.id) ? 'active' : ''}`}
                  title="Add to Compare"
                  onClick={() => toggleCompare(product.id)}
                  
                >
                  <img src="/src/assets/justice-scale.png" alt="Compare" style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>

            <div className="product-info">
              <div className="product-category">
                <span className="category-icon">{categories.find(c => c.id === product.category)?.icon}</span>
                {categories.find(c => c.id === product.category)?.name}
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'} />
                  ))}
                </div>
                <span className="rating-text">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
              </div>

              <div className="product-features">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>

              <div className="product-specs">
                {product.specifications && Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-label">{key}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>

              <div className="product-price">
                <span className="current-price">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>

              <div className="product-availability">
                <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.warranty && (
                  <span className="warranty-info">
                    <FaShieldAlt /> {product.warranty} Warranty
                  </span>
                )}
              </div>

              <button 
                className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                onClick={() => product.inStock && handleQuickView(product)}
              >
                {product.inStock ? 'View Details' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {showQuickView && selectedProduct && (
        <div className="quick-view-overlay" onClick={closeQuickView}>
          <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeQuickView}>×</button>
            <div className="quick-view-content">
              <div className="quick-view-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="quick-view-details">
                <h2>{selectedProduct.name}</h2>
                <p className="quick-view-description">{selectedProduct.description}</p>
                
                <div className="quick-view-specs">
                  <h3>Specifications</h3>
                  {selectedProduct.specifications && Object.entries(selectedProduct.specifications).map(([key, value]) => (
                    <div key={key} className="spec-row">
                      <span className="spec-key">{key}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="quick-view-system-req">
                  <h3>System Requirements</h3>
                  {selectedProduct.systemRequirements && Object.entries(selectedProduct.systemRequirements).map(([key, value]) => (
                    <div key={key} className="req-row">
                      <span className="req-key">{key}</span>
                      <span className="req-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="quick-view-price">
                  <span className="current-price">₹{selectedProduct.price.toLocaleString()}</span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="original-price">₹{selectedProduct.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                <div className="quick-view-actions">
                  <button className="quick-view-cart-btn">Add to Cart</button>
                  <button 
                    className={`quick-view-wishlist-btn ${wishlist.includes(selectedProduct.id) ? 'active' : ''}`}
                    onClick={() => toggleWishlist(selectedProduct.id)}
                  >
                    <FaHeart /> {wishlist.includes(selectedProduct.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare Modal */}
      {showCompare && compareList.length > 0 && (
        <div className="compare-overlay" onClick={() => setShowCompare(false)}>
          <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowCompare(false)}>×</button>
            <div className="compare-content">
              <h2>Product Comparison</h2>
              <div className="compare-table">
                <div className="compare-header">
                  <div className="compare-feature">Features</div>
                  {getCompareProducts().map(product => (
                    <div key={product.id} className="compare-product">
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <div className="compare-price">₹{product.price.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
                <div className="compare-rows">
                  <div className="compare-row">
                    <div className="compare-feature">Category</div>
                    {getCompareProducts().map(product => (
                      <div key={product.id} className="compare-value">
                        {categories.find(c => c.id === product.category)?.name}
                      </div>
                    ))}
                  </div>
                  <div className="compare-row">
                    <div className="compare-feature">Rating</div>
                    {getCompareProducts().map(product => (
                      <div key={product.id} className="compare-value">
                        <div className="compare-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'} />
                          ))}
                        </div>
                        {product.rating} ({product.reviews.toLocaleString()})
                      </div>
                    ))}
                  </div>
                  <div className="compare-row">
                    <div className="compare-feature">Price</div>
                    {getCompareProducts().map(product => (
                      <div key={product.id} className="compare-value">
                        <div className="compare-price-main">₹{product.price.toLocaleString()}</div>
                        {product.originalPrice > product.price && (
                          <div className="compare-price-original">₹{product.originalPrice.toLocaleString()}</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="compare-row">
                    <div className="compare-feature">Warranty</div>
                    {getCompareProducts().map(product => (
                      <div key={product.id} className="compare-value">
                        {product.warranty || 'N/A'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest CAD tools, tips, and industry insights delivered to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
          <div className="newsletter-features">
            <span>✓ Weekly CAD tips</span>
            <span>✓ New product alerts</span>
            <span>✓ Exclusive discounts</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="products-cta">
        <div className="cta-content">
          <div className="cta-left">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
          <div className="cta-right">
            <h2>Need Custom Solutions?</h2>
            <p>Contact our team for enterprise solutions and custom CAD implementations</p>
            <div className="cta-features">
              <div className="cta-feature">
                <FaGlobe />
                <span>Global Support</span>
              </div>
              <div className="cta-feature">
                <FaShieldAlt />
                <span>Enterprise Security</span>
              </div>
              <div className="cta-feature">
                <FaClock />
                <span>24/7 Assistance</span>
              </div>
            </div>
            <button className="cta-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
