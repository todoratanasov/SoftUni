using System;

namespace _10._Cube_Properties
{
    class Program
    {
        //Write a program that can calculate the length of the face diagonals, space diagonals, volume and surface area of a cube 
        //(http://www.mathopenref.com/cube.html) by a given side. On the first line you will get the side of the cube. On the second line is 
        //given the parameter (face, space, volume or area).
        static void Main(string[] args)
        {
            double side = double.Parse(Console.ReadLine());
            string parameterToCalculate = Console.ReadLine();
            double result = ParameterCalculator(side, parameterToCalculate);
            Console.WriteLine($"{result:F2}");
        }
        static double ParameterCalculator(double side, string parameter)
        {
            double result = 0;
            if (parameter=="face")
            {
                //calc the face
                result = side*Math.Sqrt(2);
            }
            else if (parameter=="space")
            {
                //calc the space d=squre3a
                result = Math.Sqrt(3) * side;

            }
            else if (parameter=="volume")
            {
                //calc the volume
                result = Math.Pow(side, 3);
            }
            else if (parameter=="area")
            {
                //calc the area
                result=6*Math.Pow(side, 2);
            }
            return result;
        }
    }
}
