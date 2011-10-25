jQuery.extend(KhanUtil, {
    makeMat: function( rown, coln, minval, maxval ) {
        minval = minval || 1;
        maxval = maxval || 100;
        var rows = [];
        for ( var i = 0; i < rown; i++ ) {
            var row = []
            for ( var j = 0; j < coln; j++ ) {
                row.push(KhanUtil.randRange( minval, maxval ));
            }
            rows.push( row );
        }
        return rows;
    },

    formatMat: function( rows ) {
        var mat = "\\begin{bmatrix}";

        mat += $.map( rows, function( row, i ) {
            return row.join(" & ");
        }).join( " \\\\ " );

        return mat + "\\end{bmatrix}";
    },

    showElements: function( rown, coln, name ) {
        name = name || "a";
        var rows = [];
        for ( var i = 1; i <= rown; i++ ) {
            var row = []
            for ( var j = 1; j <= coln; j++ ) {
                row.push(name + "_{" + i + "," + j + "}");
            }
            rows.push( row );
        }
        return this.formatMat(rows);
    },

    colorRows: function( rows ) {
        var mat = "\\begin{bmatrix}";

        var colors = ["red", "green", "blue", "orange", "brown"];

        mat += $.map( rows, function( row, i ) {
            return jQuery.map( row, function ( elt ) {
                return "\\color{" + colors[i] + "}{ " + elt + "}";
            }).join(" & ");
        }).join( " \\\\ " );

        return mat + "\\end{bmatrix}";
    },

    colorColumns: function( rows ) {
        var mat = "\\begin{bmatrix}";

        var colors = ["red", "green", "blue", "orange", "brown"];

        mat += $.map( rows, function( row ) {
            return jQuery.map( row, function ( elt, i ) {
                return "\\color{" + colors[i] + "}{ " + elt + "}";
            }).join(" & ");
        }).join( " \\\\ " );

        return mat + "\\end{bmatrix}";
    },

    scalarMult: function( matrix, scalar ) {
        var rows = [];

        for ( var i = 0; i < matrix.length; i++ ) {
            var row = [];
            for ( var j = 0; j < matrix[i].length; j++ ) {
                row.push( matrix[i][j] * scalar );
            }
            rows.push(row);
        }

        return rows;
    }
});
