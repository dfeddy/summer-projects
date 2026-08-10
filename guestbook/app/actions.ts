'use server';

import { supabase } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

export async function addMessage(formData: FormData) {
  const author = formData.get('author') as string;
  const content = formData.get('content') as string;

  if (!content?.trim()) {
    return { error: 'Message cannot be empty' };
  }

  const { error } = await supabase.from('messages').insert([
    {
      author: author?.trim() || null,
      content: content.trim(),
    },
  ]);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/');
  return { success: true };
}
