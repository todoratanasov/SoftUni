const Car = require('../models/Car');
const Rent = require('../models/Rent');

module.exports = {
    addGet: (req, res)=>{
        res.render('car/add')
    },
    addPost: (req,res)=>{
        //когато вкарваме инфо в базата нещата, които трябва да се направят са:
        //1. взимаме инфото от ЗАЯВКАТА
        const carBody = req.body;

        //2. Валидираме информацията

        //3. Вкарваме инфото използвайки моделите в базата
        carBody.pricePerDay = +carBody.pricePerDay;
        Car.create(carBody)
            .then(()=>{
        //4. Редиректваме
                res.redirect('/')
            })
            .catch((err)=>{
                console.log(`Something is wrong with adding the car - ${err}`);
            })
        
    },
    allCars: (req, res)=>{
        Car.find({isRented:false}) //по този начин полето isRented се явява критерий за търсенето. В последствие моделирайки го него контролираме и какво ще се върне тук като промис
            .then((cars)=>{
                res.render('car/all', {cars})
            })
            .catch((err)=>{
                console.log(`Something's wrong with listing all cars ${err}`)
            })
    },
    rentGet:(req,res)=>{
        const carId = req.params.id;
        Car.findById(carId)
            .then((car)=>{
                Car.findById(carId)                    
                res.render('car/rent', car)
            })
            .catch(console.error)
        
    },
    rentPost: async (req,res)=>{
        const car = req.params.id; //това си идва от url-а защото е след двете точки :
        const user = req.user._id;//в passport.js сме си конфигурирали така passport-a, че да ни закача всеки път обекта user към requesta и си го ползваме, а само req.user всъщност е целия user както е записан в базата и можем дори да си го ползваме все едно е model-а изваден от базата

        
        const days = Number(req.body.days);

        //следва варианта с async await, а след него е този с промиси
        try{
            const rent = await Rent.create({//по-този начин, ако правилно сме си задали в model-а нещата ще си направи само референциите и ще си създаде rent-a
                days,
                car,
                user
            });
            //req.user.rents.push(rent._id); //по този начин ще добавим в полето на модела rents id-то на //rent-a, който потребителя е направил
            //req.user.save();//тук си сейваме

            const carById = await Car.findById(car);
            carById.isRented = true;//тук колата си е намерена директно в базата и ние върната, за да я промеим
            await carById.save();
            req.user.rents.push(rent._id); //тук си взимаме данните на потребителя, които са закачени към request-a и им добавяме в масива rents id-то на записа на rent в базата
            await req.user.save(); //все едно е model-а изваден от базата. Не е необходимо всеки път да си го вадим
            res.redirect("/car/all");
        }catch(err){
            console.log(err)
        }
        //по-долу е варианта с промиси
        // Rent.create({//по-този начин, ако правилно сме си задали в model-а нещата ще си направи само референциите и ще си създаде rent-a
        //     days,
        //     car,
        //     user
        // })
        // .then(()=>{ //в случая трябва да променим едно от полетата на модела
        //     Car.findById(car)   //потърсваме си по ID колата
        //         .then((c)=>{
        //             c.isRented = true; //сетваме и стойността, която искаме
        //             return c.save(); //връщаме промиса, който save-ва върху старото новата кола с промяната
        //         })
        //         .then(()=>{//още един then, който вече редиректва
        //             res.redirect("/car/all")
        //         })
        //         .catch(console.error)
            
        // })
        // .catch(console.error)
    },
    editGet: (req,res)=>{
        const carId = req.params.id;//от пътя id-то
        Car.findById(carId) //намираме колата в базата
            .then((car)=>{
                res.render('car/edit', car); //рендерираме колата по input полетата като ги слагаме на value пропъртитата на tag-a
            })
            .catch((err=>{
                console.log(err);
            }))
    },
    editPost: (req,res)=>{//с post ще внесем корекциите
        const carId = req.params.id; //взимаме си id-то на изложената кола
        const {model, imageUrl, pricePerDay} = req.body;

        Car.findById(carId)
        .then((car)=>{
            car.model = model;
            car.imageUrl = imageUrl;
            car. pricePerDay = pricePerDay;

            return car.save(); //това е по-готиния начин защото връщаме promise-а, който връща save() и даваме още един then
        })
        .then((car)=>{
            res.redirect('/car/all')
        })
        .catch((err=>{
            console.log(err);
        }))

    },
    delete: (req,res)=>{
        const carId = req.params.id;
        Car.findByIdAndDelete(carId);//но това не трие и релациите (по другите model-и където има връзка конкретния запис) и трябва да се погрижим за триенето и там.
    }
}