import React, { useState } from 'react';

function ElectricityForm({ onCalculate }) {
    const [formData, setFormData] = useState({
        consumption: '',
        ptf: '',
        yekdem: '',
        discountRate: '',
        sanayiTarife: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Elektrik Tüketimi (kWh):
                <input
                    type="number"
                    name="consumption"
                    value={formData.consumption}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                PTF (TL/MWh):
                <input
                    type="number"
                    name="ptf"
                    value={formData.ptf}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                YEKDEM (TL/MWh):
                <input
                    type="number"
                    name="yekdem"
                    value={formData.yekdem}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                İskonto Oranı (%):
                <input
                    type="number"
                    name="discountRate"
                    value={formData.discountRate}
                    onChange={handleChange}
                    step="0.01"
                    required
                />
            </label>

            <label>
                Sanayi Tarifesi (TL/kWh):
                <input
                    type="number"
                    name="sanayiTarife"
                    value={formData.sanayiTarife}
                    onChange={handleChange}
                    step="0.01"
                    required
                />
            </label>

            <button type="submit">Hesapla</button>
        </form>
    );
}

export default ElectricityForm;
