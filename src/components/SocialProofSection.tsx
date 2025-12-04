import { Star, Play, X } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: 1,
    src: "/videos/entrega-corolla-2025.mp4",
    title: "Entrega do COROLLA 2025",
    description: "Cliente contemplado pelo sorteio mensal DAN CAR",
    thumbnail: "/videos/entrega-corolla-2025.mp4",
  },
  {
    id: 2,
    src: "/videos/cliente-depoimento.mp4",
    title: "Depoimento de Cliente",
    description: "Satisfação garantida com a Dan Car",
    thumbnail: "/videos/cliente-depoimento.mp4",
  },
  {
    id: 3,
    src: "/videos/sorteio-surpresa.mp4",
    title: "Sorteio Surpresa",
    description: "Momentos especiais dos nossos sorteios",
    thumbnail: "/videos/sorteio-surpresa.mp4",
  },
];

const SocialProofSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes <span className="text-accent">Realizados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a alegria de quem já realizou o sonho do carro próprio com a Dan Car
          </p>
        </div>

        {/* Video Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.src)}
            >
              <div className="rounded-2xl overflow-hidden shadow-card bg-card hover:shadow-card-hover transition-shadow">
                {/* Video Thumbnail */}
                <div className="aspect-[9/16] bg-gradient-to-br from-primary to-navy-dark relative">
                  <video
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    src={`${video.thumbnail}#t=0.1`}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="bg-red-600 group-hover:bg-red-700 rounded-xl px-4 py-3 flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-lg">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{video.title}</h3>
                  <p className="text-xs text-muted-foreground">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <video
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                src={activeVideo}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 mt-12">
          <div className="text-center p-4 bg-card rounded-xl shadow-soft">
            <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
            <div className="text-sm text-muted-foreground">Carros Vendidos</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl shadow-soft">
            <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl shadow-soft">
            <div className="text-2xl md:text-3xl font-bold text-accent">5★</div>
            <div className="text-sm text-muted-foreground">Avaliação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
