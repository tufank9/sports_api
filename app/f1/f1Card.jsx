import Image from 'next/image'
import Link from 'next/link'

export default function F1ChampionsCard() {
  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Ekranın ortasına almak için ekledik */}
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/f1.jpg"
              alt="Formula 1 race car"
              width={192}
              height={192}
            />
          </div>
          <div className="p-4 flex items-center justify-center flex-col">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">F1 İstatistikleri</div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">F1 Takım Şampiyonları</h2>
            <p className="mt-1 text-slate-500 text-center">2000'den günümüze F1 Şampiyonası kazananlarını keşfedin.</p>
            <p className="mt-1 text-slate-500 text-center">Ferrari'nin hakimiyetinden Mercedes'in üstünlüğüne, F1'in en başarılı takımlarını görün.</p>
            <Link 
              href="/f1" 
              className="mt-3 inline-block px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
            >
              Şampiyonları Gör
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
