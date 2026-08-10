import { supabase } from '@/lib/supabaseClient';
import MessageForm from './components/MessageForm';

export default async function Home() {
  const { data: messages, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return <div className="p-4 text-red-600">Error loading messages: {error.message}</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Guestbook</h1>

        {!messages || messages.length === 0 ? (
          <p className="text-gray-500">No messages yet. Be the first to sign!</p>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-800">{message.content}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold">{message.author || 'Anonymous'}</span>
                  {' — '}
                  {new Date(message.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}

        <MessageForm />
      </div>
    </main>
  );
}
