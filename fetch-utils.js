const SUPABASE_URL = 'https://ltfxplrzzaiazgejbkcz.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0ZnhwbHJ6emFpYXpnZWpia2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyOTkwODQsImV4cCI6MTk3OTg3NTA4NH0.54zXX1ScOHbNXknDFaWLVnEgOSG1mv9iTce-DxoWrl8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
