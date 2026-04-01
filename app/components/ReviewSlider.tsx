"use client";
import { useState, useEffect } from "react";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export default function ReviewSlider() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", location: "", rating: 5, text: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("shreedhar_reviews");
    if (stored) setReviews(JSON.parse(stored));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const newReview: Review = {
      ...form,
      date: new Date().toLocaleDateString("en-IN"),
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("shreedhar_reviews", JSON.stringify(updated));
    setForm({ name: "", location: "", rating: 5, text: "" });
    setShowForm(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition shadow-lg text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Add Your Review
        </button>
      </div>

      {submitted && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium text-center">
          Thank you for your review!
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">Your Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-orange-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-orange-400"
                placeholder="e.g. Priya Sharma"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 block">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={e => setForm({ ...form, location: e.target.value })}
                className="w-full border border-orange-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-orange-400"
                placeholder="e.g. Mumbai"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button key={star} type="button" onClick={() => setForm({ ...form, rating: star })}>
                  <svg className={`w-7 h-7 ${star <= form.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">Your Review *</label>
            <textarea
              value={form.text}
              onChange={e => setForm({ ...form, text: e.target.value })}
              className="w-full border border-orange-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-orange-400 resize-none"
              rows={3}
              placeholder="Share your experience..."
              required
            />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition">
              Submit Review
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-300 transition">
              Cancel
            </button>
          </div>
        </form>
      )}

      {reviews.length === 0 ? (
        <div className="text-center py-8 text-gray-400">No reviews yet. Be the first to share your experience!</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 border border-orange-50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className={`w-5 h-5 ${s < review.rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm italic mb-4">"{review.text}"</p>
              <p className="text-orange-600 font-bold text-sm">{review.name}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-gray-400 text-xs">{review.location}</p>
                <p className="text-gray-400 text-xs">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
