
import { NextRequest, NextResponse } from 'next/server';


type ContactFormOptions = {
    tel: string;
}

export async function POST(request: NextRequest) {
    const { tel}: ContactFormOptions = await request.json();

    // Valider les entrées
    if (!tel) {
        return NextResponse.json({ erreur: 'Tous les champs sont obligatoires' },
            { status: 400 });
    }

    try {
        console.log(tel)
        return NextResponse.json({
            message: 'Message de contact envoyé avec succès',
            succes: true
        });
    } catch (e: any) {
        return NextResponse.json({ erreur: `Erreur du serveur: ${e.message}` },
            { status: 500 });
    }
}
