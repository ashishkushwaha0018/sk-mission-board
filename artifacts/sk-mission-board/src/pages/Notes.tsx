import { useState } from "react";
import subjectsData from "@/data/subjects.json";
import { Download, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Notes() {
  const [selectedSubject, setSelectedSubject] = useState(subjectsData[0].id);
  
  const currentSubject = subjectsData.find(s => s.id === selectedSubject) || subjectsData[0];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-glow mb-4">
          Study Materials & Notes
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Access our premium, structured chapter-wise PDFs to boost your exam preparation.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar / Subject Selector */}
        <div className="lg:w-1/3 flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white mb-2 px-2">Subjects</h2>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {subjectsData.map((subject) => {
              const isActive = selectedSubject === subject.id;
              return (
                <button
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject.id)}
                  className={cn(
                    "flex items-center p-4 rounded-xl border text-left transition-all duration-300",
                    isActive 
                      ? "bg-purple-500/10 border-purple-500/50 glow-purple" 
                      : "bg-card border-white/10 hover:border-white/30 hover:bg-white/5"
                  )}
                >
                  <span className="text-2xl mr-3">{subject.icon}</span>
                  <div className="flex-1">
                    <h3 className={cn("font-medium", isActive ? "text-purple-300" : "text-white")}>
                      {subject.name}
                    </h3>
                    <p className="text-xs text-muted-foreground hidden md:block">
                      {subject.chapters.length} Chapters
                    </p>
                  </div>
                  {isActive && <ChevronRight className="text-purple-400 hidden lg:block" size={20} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chapters Content */}
        <div className="lg:w-2/3">
          <div className="bg-card border border-white/10 rounded-2xl p-6 md:p-8 min-h-[600px]">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <span className="text-5xl">{currentSubject.icon}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{currentSubject.name}</h2>
                <p className="text-muted-foreground">{currentSubject.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentSubject.chapters.map((chapter) => (
                <div 
                  key={chapter.id} 
                  className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-background border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {chapter.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{chapter.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <a 
                      href={chapter.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors text-sm font-medium"
                    >
                      <FileText size={16} />
                      View
                    </a>
                    <a 
                      href={chapter.pdfUrl}
                      download
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all glow-blue text-sm font-medium"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
