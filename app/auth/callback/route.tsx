import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const encodedReturnUrl = searchParams.get('returnUrl')
  const defaultReturnUrl = '/dashboard'

  if (code) {
    const supabase = createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      let returnUrl = defaultReturnUrl

      if (encodedReturnUrl) {
        const decodedReturnUrl = decodeURIComponent(encodedReturnUrl)
        // Ensure the decoded returnUrl is safe to use
        if (decodedReturnUrl.startsWith('/') || decodedReturnUrl.startsWith(origin)) {
          returnUrl = decodedReturnUrl
        }
      }

      return NextResponse.redirect(`${origin}${returnUrl}`)
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
