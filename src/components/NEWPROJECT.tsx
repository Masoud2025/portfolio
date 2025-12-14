/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Heart, ImageIcon, Info, Link, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  image: string;
  category: string;
  details: string[];
  description?: string;
  tags?: string[];
  link?: string;
}

function Card({ title, image, category, details, description, tags = [], link }: CardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({ title, text: `Check out ${title}`, url: window.location.href });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < details.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-start group">
        {/* کارت اصلی با انیمیشن‌های پیشرفته */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <img
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
          )}
          
          {/* Overlay با افکت Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* محتوای Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-5">
            <div className="flex justify-between items-start transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 shadow-lg">
                {category}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={handleLike}
                  className={`w-10 h-10 rounded-full backdrop-blur-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/30 shadow-lg ${
                    isLiked ? 'bg-red-500/80' : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-white text-white' : 'text-white'}`} />
                </button>
                <button 
                  onClick={handleShare}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/30 shadow-lg"
                >
                  <Link className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* دکمه‌های اکشن در پایین کارت */}
            <div className="flex gap-3 transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-500">
              <button 
                onClick={() => link && window.open(link, '_blank')}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-xl text-white font-semibold rounded-xl hover:bg-white/30 transition-colors duration-300 flex items-center justify-center gap-2 border border-white/30 shadow-lg"
              >
                <Info className="w-4 h-4" />
                <span>Details</span>
              </button>
            </div>
          </div>
        </div>

        {/* عنوان و دسته */}
        <div className="mt-4 w-full">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-yellow-600 transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 font-medium">{category}</p>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Drawer با طراحی پیشرفته */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className={`bg-white w-full h-full p-6 md:p-10 transform transition-all duration-500 overflow-y-auto shadow-2xl ${
              isDrawerOpen ? 'translate-y-0 scale-100' : 'translate-y-full scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-8 sticky top-0 bg-white pb-4 border-b border-gray-200 z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-lg text-gray-600 font-medium">{category}</p>
              </div>
              <button
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:rotate-90"
                onClick={() => setIsDrawerOpen(false)}
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Description */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-yellow-600" />
                  Project Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {description || "This is a remarkable project showcasing modern design principles and cutting-edge technologies. The implementation focuses on user experience, performance optimization, and scalability to deliver exceptional results."}
                </p>
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl font-semibold text-sm border border-gray-300 hover:scale-105 transition-transform duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-gray-700" />
                  Project Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {details.map((img, idx) => (
                    <div 
                      key={idx}
                      className="relative group/img cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                      onClick={() => setSelectedImage(idx)}
                    >
                      <img
                        src={img}
                        alt={`Detail ${idx + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => link && window.open(link, '_blank')}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Project</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="flex-1 px-6 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Link className="w-5 h-5" />
                  <span>Share Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox برای تصاویر */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {selectedImage > 0 && (
            <button
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}
          
          {selectedImage < details.length - 1 && (
            <button
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          <img
            src={details[selectedImage]}
            alt={`Detail ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {details.length}
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const projects = [
    {
      title: "Modern UI Interface",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
        "https://images.unsplash.com/photo-1623073147595-1df1f2d9cb2f?w=400&q=80",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80",
      ],
      description: "A cutting-edge UI design project featuring modern aesthetics and intuitive user flows.",
      tags: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    {
      title: "Fintech Mobile App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
      ],
      description: "Revolutionary fintech solution empowering users with seamless financial management.",
      tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&q=80",
      ],
      description: "Full-featured e-commerce platform with advanced analytics and seamless checkout experience.",
      tags: ["Next.js", "Stripe", "MongoDB", "AWS"],
      link: "#"
    },
    {
      title: "Corporate Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&q=80",
      ],
      description: "Comprehensive brand identity system for a Fortune 500 company.",
      tags: ["Adobe XD", "Illustrator", "Brand Strategy"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      ],
      description: "Real-time analytics dashboard with powerful data visualization capabilities.",
      tags: ["D3.js", "Vue.js", "Python", "Redis"],
      link: "#"
    },
    {
      title: "Travel Application",
      category: "Travel App",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
      ],
      description: "AI-powered travel companion app for personalized trip planning.",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      link: "#"
    },
    {
      title: "Learning Platform",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80",
      ],
      description: "Interactive learning platform with gamification and progress tracking.",
      tags: ["React", "GraphQL", "Prisma", "Docker"],
      link: "#"
    },
    {
      title: "Content Management",
      category: "CMS",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
      ],
      description: "Headless CMS solution for modern content creators and marketers.",
      tags: ["Strapi", "Next.js", "Vercel"],
      link: "#"
    },
    {
      title: "Fitness Tracker",
      category: "Fitness App",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      ],
      description: "Comprehensive fitness tracking app with AI-powered workout recommendations.",
      tags: ["Swift", "HealthKit", "CoreML"],
      link: "#"
    },
    {
      title: "Enterprise Portal",
      category: "Enterprise",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
      ],
      description: "Scalable enterprise portal with role-based access control and SSO integration.",
      tags: ["Angular", "Spring Boot", "Kubernetes"],
      link: "#"
    },
    {
      title: "Food Delivery App",
      category: "Food Delivery",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
      ],
      description: "Fast and reliable food delivery platform with real-time order tracking.",
      tags: ["React Native", "Socket.io", "Mapbox"],
      link: "#"
    },
    {
      title: "Booking System",
      category: "Booking System",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
      ],
      description: "Smart booking system with calendar integration and automated reminders.",
      tags: ["Vue.js", "Laravel", "MySQL"],
      link: "#"
    },
  ];

  const filteredProjects = projects;

  return (
    <div className="w-full min-h-screen">
      <div className="w-full px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Grid */}
          <div className={`grid ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          } gap-6 md:gap-8`}>
            {filteredProjects.map((p, i) => (
              <Card
                key={i}
                title={p.title}
                image={p.image}
                category={p.category}
                details={p.details}
                description={p.description}
                tags={p.tags}
                link={p.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}