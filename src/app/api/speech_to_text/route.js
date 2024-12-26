import { NextResponse } from "next/server";
import fetch from "node-fetch";
import FormData from "form-data";
import * as dotenv from "dotenv";
import { env } from "../../config/env";

dotenv.config();

export async function POST(req) {
  const body = await req.json();
  const base64Audio = body.audio;
  
  // Convert the base64 string to a Buffer
  const audioBuffer = Buffer.from(base64Audio, 'base64');
  
  // Create a new FormData instance
  const form = new FormData();
  
  // Append the Buffer as a file to the FormData instance
  form.append('file', audioBuffer, { filename: 'audio.wav', contentType: 'audio/wav' });
  form.append('model', env.WHISPER_MODEL); // Add the model parameter

  try {
    // Send the form data with the correct content-type
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        ...form.getHeaders(),  // Include the necessary headers for FormData
      },
      body: form,
    });

    // Parse the response from OpenAI
    const result = await response.json();
    
    if (response.ok) {
      return NextResponse.json(result);
    } else {
      console.error('Error from OpenAI:', result);
      return NextResponse.error();
    }
  } catch (error) {
    console.error('Error during request:', error);
    return NextResponse.error();
  }
}