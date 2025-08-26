const { url } = require("inspector");

it('CT01 - Obtendo todos os produtos', () => {
    cy.request('https://automationexercise.com/api/productsList')
    .then((Response) => {
        expect(Response.status).to.eq(200)
    })    
});

it('CT02 - Validando metodo inválido', () => {
    cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/productsList',
    failOnStatusCode: false
}).then((Response) => {
  console.log(Response.body)
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;
  
    
    expect(Response.body).to.include('This request method is not supported')
        expect(Response.body).to.include('405')
    })
})

it('CT03 - Validando tipos de produtos', () => {
    cy.request(' https://automationexercise.com/api/brandsList')
    .then((Response) => {
                // Faz o parse do body se vier como string
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body.responseCode).to.eq(200);
        expect(body).to.have.property('brands');
        expect(body.brands).to.be.an('array');
        expect(body.brands[0]).to.have.all.keys('id', 'brand');
        expect(body.brands[0]).to.deep.include({ id: 1, brand: 'Polo' });
    });
})
it('CT04 - Validando metodo PUT', () => {
    cy.request({
        method: 'PUT',
        url: ' https://automationexercise.com/api/brandsList',
        
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;
        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 405);
        expect(body).to.have.property('message', 'This request method is not supported.');          
    });
})

it('CT05 - Buscar produtos pelo nome', () => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/searchProduct',
        form: true,
        body: {
            search_product: 'tshirt'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('products');
        expect(body.products).to.be.an('array');
        body.products.forEach((produto, index) => {
            cy.log(`Produto ${index + 1}: ${JSON.stringify(produto)}`);   
        });

        expect(body.products[0].id).to.eq(2);
        expect(body.products[0].name).to.contain('Tshirt');
        expect(body.products[0].name).to.eq('Men Tshirt');
        expect(body.products[0].price).to.eq("Rs. 400");
        expect(body.products[0].brand).to.eq('H&M');
        expect(body.products[0].category.usertype).to.deep.eq({ usertype: 'Men' });
        cy.log((body.products[0].category));
        
    });
});

it('CT06 - Buscar produtos sem parametro', () => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/searchProduct',
        
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
                expect(body).to.have.property('responseCode', 400);
        expect(body).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.');
        
    });
});

it('CT07 - Validando Login Valido', () => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
        failOnStatusCode: false,
        body: {
            email: 'dio.soares@gmail.com',
            password: '123456'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 200);
        expect(body).to.have.property('message', 'User exists!');
    });
});

it('CT08 - Validando Login sem parametro password', () => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
        failOnStatusCode: false,
        body: {
            email: 'dio.soares@gmail.com'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 400);
        expect(body).to.have.property('message', 'Bad request, email or password parameter is missing in POST request.');
    });
});

it('CT09 - Validando metodo DELETE em Login', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://automationexercise.com/api/verifyLogin'
        
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 405);
        expect(body).to.have.property('message', 'This request method is not supported.');
    });
});

it('CT10 - Validando Login com dados invalidos', () => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
        failOnStatusCode: false,
        body: {
            email: 'dionisio.soares@gmail.com',
            password: '1234567'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 404);
        expect(body).to.have.property('message', 'User not found!');
            });
});

it('CT11 - Criando novo usuário', () => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: {
            name:           'Dio',
            email:          'dio@uorak.com',
            password:       '123456',
            title:          'Mr',
            birth_date:     '06',
            birth_month:    'September',
            birth_year:     '1982',
            firstname:      'Dionisio firstname',
            lastname:       'Marques',
            company:        'Quality',
            address1:       'Rua da automacao, 22 - Bobotization',
            address2:       'Campo de endereço para segunda informação',
            country:        'United States',
            zipcode:        '58000000',
            state:          'Ohio',
            city:           'Oclaroma',
            mobile_number:  '83981255238'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 201);
        expect(body).to.have.property('message', 'User created!');
    });
});

it('CT13 - Atualizando usuário', () => {
    cy.request({
        method: 'PUT',
        url: 'https://automationexercise.com/api/updateAccount',
        form: true,
        body: {
            name:           'Dionisio atualizado',
            email:          'dio@uorak.com',
            password:       '123456',
            title:          'Mr',
            birth_date:     '06',
            birth_month:    'September',
            birth_year:     '1982',
            firstname:      'Dionisio firstname',
            lastname:       'Marques',
            company:        'Quality',
            address1:       'Rua da automacao, 22 - Bobotization',
            address2:       'Campo de endereço para segunda informação',
            country:        'United States',
            zipcode:        '58000000',
            state:          'Ohio',
            city:           'Oclaroma',
            mobile_number:  '83981255238'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 200);
        expect(body).to.have.property('message', 'User updated!');
    });
});


it('CT14 - Buscar detalhes do usuário por email', () => {
    cy.request({
        method: 'GET',
        url: 'https://automationexercise.com/api/getUserDetailByEmail',
        qs: {
            email: 'dio@uorak.com'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('user');
        cy.log(`Detalhes do usuário: ${JSON.stringify(body.user)}`);
        
    });
});

it('CT12 - Deletando usuário', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: {
            'email': 'dio@uorak.com',
            'password': '123456'
        }
    }).then((Response) => {
        const body = typeof Response.body === 'string' ? JSON.parse(Response.body) : Response.body;

        expect(Response.status).to.eq(200);
        expect(body).to.have.property('responseCode', 200);
        expect(body).to.have.property('message', 'Account deleted!');
    });
});