using System;

namespace _11._Geometry_Calculator
{
    class Program
    {
        //Write a program that can calculate the area of four different geometry figures - triangle, square, rectangle and circle.
        //On the first line you will get the figure type.Next you will get parameters for the chosen figure, each on a different line:
        //•	Triangle - side and height
        // •	Square - side
        // •	Rectangle - width and height
        // •	Circle - radius
        // The output should be rounded to the second digit after the decimal point:

        static void Main(string[] args)
        {
            string figure = Console.ReadLine();
            if (figure=="triangle"||figure=="rectangle")
            {
                double answer = AreaCalculatorTriangleRectangle(figure, double.Parse(Console.ReadLine()), double.Parse(Console.ReadLine()));
                Console.WriteLine($"{answer:F2}");
            }
            else if (figure=="square"||figure=="circle")
            {
                double answer = AreaCalculatorSquareCircle(figure, double.Parse(Console.ReadLine()));
                Console.WriteLine($"{answer:F2}");
            }
            
            
        }
        static double AreaCalculatorTriangleRectangle(string figure, double parameter1, double parameter2)
        {
            double result = 0;

            if (figure == "triangle")
            {
                result = (parameter1 * parameter2) / 2;
            }
            else if (figure == "rectangle")
            {
                result = parameter1 * parameter2;
            }

            return result;
        }
        static double AreaCalculatorSquareCircle(string figure, double parameter1)
        {
            double result = 0;

            if (figure=="square")
            {
                result = Math.Pow(parameter1, 2);
            }
            else if (figure=="circle")
            {
                
                result = Math.PI * Math.Pow(parameter1, 2);
            }
            return result;
        }
    }
}
