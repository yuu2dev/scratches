#include <iostream>
using namespace std;

/* constexpr: 값을 컴파일 할 때 평가하는 키워드 */
void studyConstexpr(int a) {
	const int b = 20;
	const int c1 = a;
	/// constexpr int c2 = a + 10;
	constexpr int c3 = b + 100;
	// constexpr int c4 = c1 * 2;
}

/* 범위기반 반복문 */
void rangeBasedForLoop () {
	int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
	int sum = 0;
	for (int i : arr) {
		sum += i;
	}
	cout << "합은 : " << sum << "\n" << endl;
	// 배열 요소마다 x2 하기 > & 참조변수를 선언해야 값을 수정할 수 있다! 
	for (int& i : arr) {
		i *= 2;
	}
	for (int i : arr) {
		cout << i << endl;
	}
}
/* s: 구조체 */
struct Student {
	string name;
	int age;
};

struct School {
	Student student[3];
};

void studyStruct() {
	Student std1 = { "윤혁준", 14 };
	Student std2 = { "김태현", 14 };
	School school = { std1, std2 };
	for (Student std : school.student) {
		if (std.name.length() <= 0) {
			continue;
		}
		cout << std.name << ":" << std.age << endl;
	}
}

/* e: 구조체 */
/* s: 포인터 */
void studyPointer() {
	string name = "유민상";
	// 포인터 변수. 선언만되었고 정의되지 않았으므로 아직 사용하면 안됨
	string* arias = &name;
	// arias 는 메모리 주소이다. 그러므로 참조변수를 사용하여 주소를 구함.
	// arias = &name;
	
	cout << arias << endl; // 주소값
	cout << *arias << endl; // 실제 값
	*arias = "상민유";
	cout << name << *arias << endl;

	// const 포인터를 사용해보자. 포인터 위치에 따라 의미가 달라질 수 있다.
	int price1 = 2000, price2 = 3000;
	// (1) ptr1이 const int에 대한 포인터: 값은 수정 할 수 없다. 단, 주소는 변경 할 수 있다.
	const int *ptr1 = &price1; 
	ptr1 = &price2; // *ptr1 = 1000;
	// (2) ptr2에 대해 const가 지정된 것: 값은 수정 할 수 있으나 주소는 변경 할 수 없다.
	int* const ptr2 = &price1;
	*ptr2 = 1000; // ptr2 = &price2;
}
/* e: 포인터 */
int main() {
	studyPointer();
	return 0;
}