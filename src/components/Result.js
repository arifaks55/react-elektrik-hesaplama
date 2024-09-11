import React from 'react';

function Result({ result }) {
    // Kâr/Zarar durumuna göre renk ayarı
    const resultColor = result.comparison === 'Kârda' ? 'green' : 'red';

    return (
        <div>
            <h2>Sonuçlar</h2>
            <p>Toplam Elektrik Faturası: {result.totalCost} TL</p>
            <p>Sanayi Tarifesine Göre Fatura Tutarı: {result.sanayiCost} TL</p>
            <p style={{ color: resultColor }}>Durum: {result.comparison}</p>
            <p style={{ color: resultColor }}>Kâr/Zarar Oranı: {result.percentage}%</p>
        </div>
    );
}

export default Result;
