// app/f1/F1ChampionsClient.js
'use client'

import { useState, useEffect } from 'react'

export default function F1ChampionsClient() {
  const [champions, setChampions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/f1/teamchampions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then(data => {
        setChampions(data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p className="text-center">Yükleniyor...</p>
  if (error) return <p className="text-center text-red-500">Hata: {error}</p>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-black">Yıl</th>
            <th className="px-4 py-2 text-left text-black">Takım</th>
          </tr>
        </thead>
        <tbody>
          {champions.map((champion) => (
            <tr key={champion.year} className="border-b">
              <td className="px-4 py-2 text-black">{champion.year}</td>
              <td className="px-4 py-2 text-black">{champion.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}