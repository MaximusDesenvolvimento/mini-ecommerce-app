import {  NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const cep = searchParams.get('cep')

  const sendCEp = await fetch(`https://viacep.com.br/ws/${cep}/json/`,{
    cache: "no-cache"
  })
  const response = await sendCEp.json()
  if(response.erro === "true") {
    return NextResponse.json({ status: 404 });
    
  }
  
  
  return NextResponse.json({ status: 200, data: response });
}
