let container = document.getElementById("carsContainer");

container.innerHTML = `
    <div class="col-md-4">
        <div class="card">
            <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
                class="card-img-top"
                alt="Porsche"
            >

            <div class="card-body">
                <h4>Porsche 911</h4>
                <p>$135,000</p>

                <button class="btn btn-dark">
                    Details
                </button>
            </div>
        </div>
    </div>


    <div class="col-md-4">
        <div class="card">
            <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
                class="card-img-top"
                alt="BMW"
            >

            <div class="card-body">
                <h4>BMW M4</h4>
                <p>$85,000</p>

                <button class="btn btn-dark">
                    Details
                </button>
            </div>
        </div>
    </div>


    <div class="col-md-4">
        <div class="card">
            <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"
                class="card-img-top"
                alt="Mercedes"
            >

            <div class="card-body">
                <h4>Mercedes AMG GT</h4>
                <p>$120,000</p>

                <button class="btn btn-dark">
                    Details
                </button>
            </div>
        </div>
    </div>
`;
