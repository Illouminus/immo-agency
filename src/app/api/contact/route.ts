import { NextRequest, NextResponse } from 'next/server';
import {sendEmail} from "@/shared/nodeMailer/nodeMailer";


type ContactFormOptions = {
    tel: string;
}

export async function POST(request: NextRequest) {
    const { tel }: ContactFormOptions = await request.json();
    // Valider les entrées
    if (!tel) {
        return NextResponse.json({ erreur: 'Tous les champs sont obligatoires' },
            { status: 400 });
    }

    try {
        const emailAdmin = process.env.EMAIL_ADMIN;
        if (!emailAdmin) {
            return NextResponse.json({ erreur: 'Erreur du serveur: EMAIL_ADMIN non défini' },
                { status: 500 });
        }
        const emailData = {
            to: emailAdmin,
            subject: 'У вас новый запрос на контакт',
            text: `Номер телефона ${tel} прислал запрос`,
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                    <h1 style="color: #444;">Новый запрос на контакт</h1>
                    <p><strong>Телефон:</strong> ${tel}</p>
                </div>
            `
        };

        const send = await sendEmail(emailData);
            return NextResponse.json({
                message: 'Message de contact envoyé avec succès',
                succes: true
            });

    } catch (e: any) {
        return NextResponse.json({ erreur: `Erreur du serveur: ${e.message}` },
            { status: 500 });
    }
}
