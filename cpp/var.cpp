#include <iostream>
using namespace std;

/* 전역변수 > 프로그램이 종료될 때 까지 */
int varLifeTime1;

/* const > 값을 바꾸지 않겠다는 키워드*/
double getCircleWidth (double radius = 0) {
	const double PI{ 3.14159 };
	double area = radius * radius * PI;
	cout << "원의 면적 = " << area << endl;
	return area;
}

/* constexpr > 값을 컴파일 할 때 평가하는 키워드 */
void studyConstexpr(int a) {
	const int b = 20;
	const int c1 = a;
	/// constexpr int c2 = a + 10;
	constexpr int c3 = b + 100;
	// constexpr int c4 = c1 * 2;
}

void studyVarLifeTime (int num) {
	/* 지역변수 > 함수가 닫힐 때까지 */
	int varLifeTime2;
	/* 정적 지역변수 > 프로그램이 종료 될 때 까지, 이경우 함수가 재실행 될 때 마다 누산됨 */
	static int varLifeTime3;
}


int main() {
	getCircleWidth(10);
	studyConstexpr(10);
	
	return 0;
}