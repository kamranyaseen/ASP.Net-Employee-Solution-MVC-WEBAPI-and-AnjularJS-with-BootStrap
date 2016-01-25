app.controller('AddEmployeeController', function ($scope, SinglePageCRUDService) {
    $scope.EmpNo = 0;
    $scope.save = function () {
        var Employee = {
            EmpNo: $scope.EmpNo,
            EmpName: $scope.EmpName,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation
        };
     
        var promisePost = SinglePageCRUDService.post(Employee);


        promisePost.then(function (pl) {
            $scope.EmpNo = pl.data.EmpNo;
            alert("Successfully Saved. EmpNo " + pl.data.EmpNo);
            $location.path("/showemployees");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });

    };

});