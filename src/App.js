import './styles.css';  // CSS dosyasını ekledik
import React, { useState } from 'react';
import ElectricityForm from './components/ElectricityForm';
import Result from './components/Result';

function App() {
  const [result, setResult] = useState(null);

  const calculate = (data) => {
    const { consumption, ptf, yekdem, discountRate, sanayiTarife } = data;
    const etvRate = 0.01;
    const kdvRate = 0.20;

    // PTF ve YEKDEM bedellerini kWh cinsinden hesapla
    const ptfPerKWh = ptf / 1000;
    const yekdemPerKWh = yekdem / 1000;
    const totalPerKWh = ptfPerKWh + yekdemPerKWh;

    // İskonto uygulama
    const discountedPerKWh = totalPerKWh * (1 - discountRate / 100);

    // Toplam tüketim bedelini hesapla
    const consumptionCost = consumption * discountedPerKWh;

    // ETV ve KDV hesaplama
    const totalWithETV = consumptionCost * (1 + etvRate);
    const totalCost = totalWithETV * (1 + kdvRate);

    // Sanayi tarifesine göre maliyeti hesapla
    const sanayiCost = consumption * sanayiTarife * (1 + etvRate) * (1 + kdvRate);

    // Kârda mı, zararda mı?
    let comparison, percentage;
    if (totalCost < sanayiCost) {
      comparison = 'Kârda';
      percentage = ((sanayiCost - totalCost) / sanayiCost) * 100;
    } else {
      comparison = 'Zararda';
      percentage = ((totalCost - sanayiCost) / sanayiCost) * 100;
    }

    // Sonuçları ayarla
    setResult({
      totalCost: totalCost.toFixed(2),
      sanayiCost: sanayiCost.toFixed(2),
      comparison,
      percentage: percentage.toFixed(2),
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Elektrik Faturası Hesaplama</h1>
        <ElectricityForm onCalculate={calculate} />
        {result && <Result result={result} />}
      </div>
    </div>
  );
}

export default App;
