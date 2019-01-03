using System;

namespace Description_of_OBJECTS_AND_CLASSES
{
    class Program
    {
        static void Main(string[] args)
        {
            var name = "pesho";
            var age = 19;

            var students = new { Name = "Pesho", Age = 19, Sex="male" };                // това е анонимен тип (ненаименован обект). Може да си пълниш
                                                                                        // колкото си искаш неща вътре

            Console.WriteLine(students.Age);                                             //по този начин се изпечатват стойностите на анонимния тип
            Console.WriteLine(students.Name);
            Console.WriteLine(students);

            var date = new DateTime(2000, 2, 1);                                        // по този начин имаме обект със стойност дата     

            var student2 = new Student();                                               //по този начин си създаваме нов обект използвайки нашият class
                                                                                        //реве в момента защото не му подаваме нищо в скобите

            var student = new Student("Pesho", 19);                                     //по този начин си създаваме нов обект използвайки нашият 
                                                                                        //създаден вече по-долу клас с подадени от нас стойности
                                                                                        //това в скобите

            student.Age = 19;                                                           //по този начин присвояваме стойност на съответното пропърти                                                                                       
            student.Name = "Pesho";                                                     // в нашият създаден клас

            student.SayHello();                                                         // по този начин ще извикаме метода създаден в нашият class

            Triangle triangle = new Triangle();                                         //извикваме си отново наш създаден клас Triangle
            Triangle.Sides;                                                             //хардкоднатата със static стойност в нашият class по този начин
                                                                                        //се извиква. Със static запазваме някаква статична информация
                                                                                        //касаеща нашият class, която не може да се променя, но е const.
        }
    }
    class Student                                                                       //по този начин се създават класовете на това място след program
    {
        public string Name { get; set; }
        public int Age { get; set; } = 20;                                              //по този начин след =-то задаваме дефолтна стойност на Age
                                                                                        //която може в последствие да се променя

        public Student()                                                                //по този начин се създава конструктор, който да не иска задъл-
        {                                                                               //жително каквито и да било стойности

        }
        public Student(string name, int age)                                            // по този начин се създава конструктор, който да иска 
        {                                                                               //две стойности (name и age)
            this.Name = name;                                                           //по този начин казваме, че Name в класът ни ще приема 
                                                                                        //подадената стойност в name на конструктора
            this.Age = age;
        }
        public void SayHello()                                                   //по този начин си създаваме наши си методи вътре в класа
        {
            Console.WriteLine("Hi! I am " + this.Name);                          //this.Name в случая е стойността, която сме вкарали на Name                          
        }
        public override string ToString()                                       // по този начин променихме поведението на .ToString() да връща
        {                                                                       //това, което ние искаме след return
            return $"Name: {this.Name}, Age: {this.Age}";
        }
    }
    class Triangle
    {
        public int SideA { get; set; }
        public int SideB { get; set; }

        public double Area { get; set; }

        public static int Sides = 3;
    }
}
